### Roster Details<br />
Team Name: Adventurers<br />
Roster: adamS, hAdji, juanflatroo, meztal, Woro2k<br />
Global Rank: [107](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [76]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  846.4<br />
<br />
Final Rank Value (846.4) = Starting Rank Value (807.7) + Head To Head Adjustments (38.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.091[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 807.7
- 400 + ( ( 0.208 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 807.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |        1 | 2025-01-27 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |    -9.08 | adamS, hAdji, juanflatroo, meztal, Woro2k |
|           25 |     1091 | 2024-11-12 | FlyQuest        | L   | 0.697      | -            | -                | -                | -         |    -1.80 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           24 |     1121 | 2024-11-12 | The MongolZ     | L   | 0.691      | -            | -                | -                | -         |    -0.11 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           23 |     1154 | 2024-11-11 | Lynn Vision     | W   | 0.685      | 0.143        | 0.031 (0.003)    | 0.383 (0.037)    | 1 (0.685) |    14.43 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           22 |     1435 | 2024-10-27 | NAVI Junior     | L   | 0.585      | -            | -                | -                | -         |    -4.17 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           21 |     1459 | 2024-10-26 | L&G             | W   | 0.579      | 0.333        | 0.058 (0.011)    | 0.572 (0.110)    | 0 (0.000) |     9.48 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           20 |     1486 | 2024-10-25 | NAVI Junior     | L   | 0.572      | -            | -                | -                | -         |    -4.18 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           19 |     1507 | 2024-10-23 | GenOne          | W   | 0.559      | 0.333        | 0.019 (0.004)    | 0.603 (0.112)    | 0 (0.000) |     8.07 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           18 |     1524 | 2024-10-21 | L&G             | W   | 0.546      | 0.333        | 0.058 (0.011)    | 0.572 (0.104)    | 0 (0.000) |     9.00 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           17 |     1870 | 2024-10-06 | FAVBET          | L   | 0.446      | -            | -                | -                | -         |    -5.84 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           16 |     1905 | 2024-10-05 | Monte           | L   | 0.439      | -            | -                | -                | -         |    -3.31 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           15 |     1927 | 2024-10-04 | GamerLegion     | L   | 0.434      | -            | -                | -                | -         |    -0.73 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           14 |     2018 | 2024-10-02 | los kogutos     | W   | 0.418      | 0.435        | 0.070 (0.013)    | 0.808 (0.147)    | 0 (0.000) |    10.70 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           13 |     2081 | 2024-09-30 | ALTERNATE aTTaX | W   | 0.407      | 0.435        | 0.070 (0.012)    | 0.666 (0.118)    | 0 (0.000) |     9.86 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           12 |     2089 | 2024-09-30 | TSM             | L   | 0.405      | -            | -                | -                | -         |    -5.09 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           11 |     2143 | 2024-09-28 | Spirit Academy  | L   | 0.393      | -            | -                | -                | -         |    -3.04 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           10 |     2244 | 2024-09-26 | FAVBET          | W   | 0.379      | 0.435        | 0.074 (0.012)    | 1.000 (0.165)    | 0 (0.000) |     7.50 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            9 |     2339 | 2024-09-24 | Passion UA      | W   | 0.366      | 0.435        | 0.105 (0.017)    | 0.802 (0.128)    | 0 (0.000) |     9.77 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            8 |     3046 | 2024-08-30 | Onyx Ravens     | W   | 0.199      | 0.143        | 0.019 (0.001)    | 0.039 (0.001)    | 0 (0.000) |     1.43 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            7 |     3055 | 2024-08-30 | NOM             | W   | 0.199      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     0.88 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            6 |     3079 | 2024-08-29 | Superfkrs       | W   | 0.193      | 0.143        | -                | 0.027 (0.001)    | -         |     0.93 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            5 |     3100 | 2024-08-29 | Bravado         | W   | 0.192      | -            | -                | -                | -         |     0.91 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            4 |     3134 | 2024-08-28 | Al-Ittihad      | W   | 0.186      | -            | -                | -                | -         |     0.56 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            3 |     3151 | 2024-08-28 | JiJieHao        | L   | 0.185      | -            | -                | -                | -         |    -3.93 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            2 |     3392 | 2024-08-22 | Superfkrs       | L   | 0.147      | -            | -                | -                | -         |    -3.96 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            1 |     3454 | 2024-08-21 | Al-Ittihad      | W   | 0.139      | -            | -                | -                | -         |     0.41 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,755.23)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
