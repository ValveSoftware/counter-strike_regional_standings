### Roster Details<br />
Team Name: MIGHT<br />
Roster: djay, Fr3nk1e, Nifty, scar, Snakes<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [191](../standings_global.md)<br />
Regional Rank: [51]( ../standings_americas.md)<br />
Final Rank Value:  542.4<br />
<br />
Final Rank Value (542.4) = Starting Rank Value (552.9) + Head To Head Adjustments (-10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 552.9
- 400 + ( ( 0.071 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 552.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     1128 | 2024-05-22 | Limitless        | L   | 0.829      | -            | -                | -                | -         |    -4.16 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           28 |     1135 | 2024-05-22 | Limitless        | L   | 0.829      | -            | -                | -                | -         |    -4.33 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           27 |     1212 | 2024-05-20 | Take Flyte       | L   | 0.816      | -            | -                | -                | -         |    -7.74 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           26 |     1217 | 2024-05-20 | Take Flyte       | W   | 0.816      | 0.477        | 0.003 (0.001)    | 0.245 (0.095)    | 0 (0.000) |    18.43 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           25 |     1377 | 2024-05-15 | FLUFFY AIMERS    | L   | 0.783      | -            | -                | -                | -         |    -7.11 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           24 |     1383 | 2024-05-15 | FLUFFY AIMERS    | L   | 0.783      | -            | -                | -                | -         |    -7.53 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           23 |     1438 | 2024-05-14 | BOSS             | L   | 0.776      | -            | -                | -                | -         |    -3.91 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           22 |     1444 | 2024-05-14 | BOSS             | L   | 0.776      | -            | -                | -                | -         |    -4.06 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           21 |     1579 | 2024-05-09 | Wildcard         | L   | 0.742      | -            | -                | -                | -         |    -2.00 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           20 |     1583 | 2024-05-09 | Wildcard         | L   | 0.742      | -            | -                | -                | -         |    -2.04 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           19 |     1597 | 2024-05-08 | Elevate          | L   | 0.736      | -            | -                | -                | -         |    -1.44 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           18 |     1599 | 2024-05-08 | Elevate          | L   | 0.736      | -            | -                | -                | -         |    -1.46 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           17 |     2262 | 2024-04-10 | Perseverance     | W   | 0.549      | 0.477        | 0.006 (0.002)    | 0.268 (0.070)    | 0 (0.000) |    13.61 | danss, djay, Nifty, scar, Snakes   |
|           16 |     2269 | 2024-04-10 | Perseverance     | L   | 0.549      | -            | -                | -                | -         |    -3.66 | danss, djay, Nifty, scar, Snakes   |
|           15 |     2317 | 2024-04-09 | Nouns            | L   | 0.543      | -            | -                | -                | -         |    -1.45 | danss, djay, Louie, scar, Snakes   |
|           14 |     2320 | 2024-04-09 | Nouns            | L   | 0.543      | -            | -                | -                | -         |    -1.47 | danss, djay, Nifty, scar, Snakes   |
|           13 |     2447 | 2024-04-04 | Party Astronauts | L   | 0.509      | -            | -                | -                | -         |    -1.25 | danss, djay, Nifty, scar, Snakes   |
|           12 |     2455 | 2024-04-04 | Party Astronauts | L   | 0.509      | -            | -                | -                | -         |    -1.26 | danss, djay, Nifty, scar, Snakes   |
|           11 |     2623 | 2024-03-27 | Limitless        | L   | 0.456      | -            | -                | -                | -         |    -4.84 | danss, djay, Nifty, scar, Snakes   |
|           10 |     2630 | 2024-03-27 | Limitless        | L   | 0.456      | -            | -                | -                | -         |    -5.02 | danss, djay, Nifty, scar, Snakes   |
|            9 |     2674 | 2024-03-26 | NRG              | L   | 0.450      | -            | -                | -                | -         |    -2.02 | danss, djay, Nifty, scar, Snakes   |
|            8 |     2679 | 2024-03-26 | NRG              | L   | 0.449      | -            | -                | -                | -         |    -2.06 | danss, djay, Nifty, scar, Snakes   |
|            7 |     3079 | 2024-03-06 | LAG              | L   | 0.316      | -            | -                | -                | -         |    -1.24 | danss, djay, Nifty, scar, Snakes   |
|            6 |     3080 | 2024-03-06 | LAG              | W   | 0.316      | 0.477        | 0.020 (0.003)    | 0.417 (0.063)    | 0 (0.000) |     8.80 | danss, djay, Nifty, scar, Snakes   |
|            5 |     3117 | 2024-03-05 | Mythic           | W   | 0.310      | 0.477        | 0.015 (0.002)    | 0.341 (0.050)    | 0 (0.000) |     8.10 | danss, djay, Nifty, scar, Snakes   |
|            4 |     3119 | 2024-03-05 | Mythic           | W   | 0.309      | 0.477        | 0.015 (0.002)    | 0.341 (0.050)    | 0 (0.000) |     8.22 | danss, djay, Nifty, scar, Snakes   |
|            3 |     3370 | 2024-02-22 | Liquid           | L   | 0.229      | -            | -                | -                | -         |    -0.02 | danss, djay, Nifty, scar, Snakes   |
|            2 |     3371 | 2024-02-22 | Perseverance     | W   | 0.229      | 0.143        | 0.006 (0.000)    | 0.268 (0.009)    | 0 (0.000) |     5.66 | danss, djay, Nifty, scar, Snakes   |
|            1 |     3518 | 2024-02-16 | Rocket           | L   | 0.189      | -            | -                | -                | -         |    -3.30 | danss, djay, Nifty, scar, Snakes   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
