### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, MoDo, Nexius<br />
Global Rank: [53](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [37]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  1026.7<br />
<br />
Final Rank Value (1026.7) = Starting Rank Value (944.4) + Head To Head Adjustments (82.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.516[<sup>1</sup>](#table2)
- Bounty Collected: 0.418[<sup>2</sup>](#table1)
- Opponent Network: 0.138[<sup>2</sup>](#table1)
- LAN Wins: 0.049[<sup>2</sup>](#table1)

The average of these factors is 0.280<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 944.4
- 400 + ( ( 0.280 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 944.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      303 | 2024-08-31 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -18.81 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           32 |      322 | 2024-08-30 | Endpoint          | W   | 1.000      | 0.384        | 0.066 (0.025)    | 0.703 (0.270)    | 0 (0.000) |    12.26 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           31 |      530 | 2024-08-26 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -4.97 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           30 |      545 | 2024-08-26 | Falcons           | L   | 1.000      | -            | -                | -                | -         |    -1.91 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           29 |      591 | 2024-08-25 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -0.68 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           28 |      630 | 2024-08-23 | AMKAL             | W   | 1.000      | 0.535        | 0.122 (0.065)    | 0.377 (0.202)    | 0 (0.000) |    14.45 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           27 |      638 | 2024-08-23 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -13.34 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           26 |      644 | 2024-08-23 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -13.55 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           25 |      682 | 2024-08-22 | Rebels            | W   | 1.000      | 0.143        | -                | 0.670 (0.096)    | 0 (0.000) |    10.92 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           24 |      704 | 2024-08-21 | HEROIC            | W   | 1.000      | 0.535        | 0.204 (0.109)    | 0.434 (0.232)    | 0 (0.000) |    28.52 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           23 |      717 | 2024-08-21 | Zero Tenacity     | W   | 1.000      | 0.143        | 0.164 (0.023)    | 1.000 (0.143)    | 0 (0.000) |    15.76 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           22 |      753 | 2024-08-21 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -1.70 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           21 |      897 | 2024-08-15 | B8                | W   | 1.000      | 0.143        | 0.247 (0.035)    | 1.000 (0.143)    | 0 (0.000) |    20.72 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           20 |      903 | 2024-08-15 | PARIVISION        | W   | 1.000      | 0.143        | -                | 0.707 (0.101)    | 0 (0.000) |    22.18 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           19 |      908 | 2024-08-15 | ARCRED            | W   | 1.000      | 0.143        | -                | 0.412 (0.059)    | 0 (0.000) |    16.16 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           18 |     1471 | 2024-07-30 | Complexity        | L   | 0.913      | -            | -                | -                | -         |    -1.28 | F1KU, k1to, MoDo, Nexius, Thomas   |
|           17 |     1509 | 2024-07-29 | Spirit            | L   | 0.905      | -            | -                | -                | -         |    -0.10 | F1KU, k1to, MoDo, Nexius, Thomas   |
|           16 |     2922 | 2024-05-30 | Chinggis Warriors | L   | 0.506      | -            | -                | -                | -         |    -9.41 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           15 |     2950 | 2024-05-29 | ATOX              | L   | 0.498      | -            | -                | -                | -         |   -11.45 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           14 |     3209 | 2024-05-19 | paiN              | L   | 0.432      | -            | -                | -                | -         |    -0.35 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           13 |     3217 | 2024-05-18 | Liquid            | L   | 0.428      | -            | -                | -                | -         |    -0.38 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           12 |     3681 | 2024-05-01 | Insilio           | L   | 0.314      | -            | -                | -                | -         |    -5.69 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           11 |     3710 | 2024-04-30 | Sashi             | L   | 0.306      | -            | -                | -                | -         |    -3.31 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           10 |     3930 | 2024-04-20 | MIBR              | L   | 0.240      | -            | -                | -                | -         |    -0.64 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            9 |     3948 | 2024-04-19 | 9z                | W   | 0.236      | 0.589        | 0.362 (0.050)    | 0.507 (0.070)    | 1 (0.236) |     7.02 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            8 |     3958 | 2024-04-19 | Monte             | W   | 0.235      | -            | -                | -                | 1 (0.235) |     3.47 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            7 |     4003 | 2024-04-18 | MIBR              | L   | 0.228      | -            | -                | -                | -         |    -0.64 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            6 |     4132 | 2024-04-14 | Aurora            | L   | 0.200      | -            | -                | -                | -         |    -0.51 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            5 |     4141 | 2024-04-13 | BetBoom           | W   | 0.194      | 0.684        | 0.227 (0.030)    | 0.511 (0.068)    | -         |     4.95 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            4 |     4150 | 2024-04-13 | BIG               | W   | 0.193      | 0.684        | 0.145 (0.019)    | -                | -         |     5.09 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            3 |     4162 | 2024-04-12 | Ninjas in Pyjamas | W   | 0.186      | 0.684        | 0.232 (0.029)    | -                | -         |     5.48 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            2 |     4233 | 2024-04-10 | ENCE              | W   | 0.173      | 0.684        | 0.129 (0.015)    | -                | -         |     4.50 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            1 |     4313 | 2024-04-08 | Aurora            | L   | 0.160      | -            | -                | -                | -         |    -0.37 | F1KU, HeavyGod, k1to, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($33,978.49)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-25 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-08-04 |      0.946 | $5,000.00      | $4,731.62       |
| 2024-05-02 |      0.320 | $1,000.00      | $320.27         |
| 2024-04-20 |      0.242 | $10,000.00     | $2,416.18       |
| 2024-04-14 |      0.200 | $70,000.00     | $14,010.41      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
