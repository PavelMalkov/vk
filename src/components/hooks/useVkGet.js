import axios from "axios";
import { ref, onMounted } from "vue";

const serviceToken =
  //  "387e5b0f387e5b0f387e5b0f283803119a3387e387e5b0f5abda2359581001584c62f9a";
  "vk1.a.J7DLllmLiiS7py3mvvbaX0sYt7azMgiX1dlE-z1A4Z7JVsUjObOgyJXXXZwuPZFfKNfmRvESfMt2368UyJlRjqyJZKdoPB8X_DwnpsHtEnmyScbkUVqisiS8tV3s782HVmbgPkqwevgS-nlULXevr3DCYdLYu8-W5J17eyzLO1xqttZJ8NfbqX2MmR1KHUIM";

export function useVkGet(q, limit) {
  const vkUsers = ref([]);
  const totalPages = ref(0);
  const isUsersLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get(
        `
        http://localhost:8080/method/users.search?q=${q}&count=${limit}&fields=photo%2Cscreen_name&online=0&has_photo=0&access_token=${serviceToken}&v=5.131&Access-Control-Allow-Origin:*`
      );
      /* console.log(response.data.response.items); */
      vkUsers.value = response.data.response.items;
    } catch (e) {
      alert("Ошибка");
    } finally {
      isUsersLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    vkUsers,
    isUsersLoading,
    totalPages,
  };
}
