let initialized = false;

const init = async () => {
  if (initialized) {
    return;
  }

  process.env.restaurants_api =
    "https://k863xwjjya.execute-api.eu-west-1.amazonaws.com/dev/restaurants";
  process.env.AWS_REGION = "eu-west-1";
  process.env.restaurants_table = "restaurants-dev-fuglu";
  process.env.order_events_stream = "orders-dev-fuglu";
  process.env.restaurant_notification_topic = "restaurants-dev-fuglu";
  process.env.TEST_ROOT =
    "https://k863xwjjya.execute-api.eu-west-1.amazonaws.com/dev";

  initialized = true;
};

module.exports = {
  init
};
