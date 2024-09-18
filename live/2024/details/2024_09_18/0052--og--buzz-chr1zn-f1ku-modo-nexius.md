### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, MoDo, Nexius<br />
Global Rank: [52](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [38]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  1040.9<br />
<br />
Final Rank Value (1040.9) = Starting Rank Value (962.5) + Head To Head Adjustments (78.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.517[<sup>1</sup>](#table2)
- Bounty Collected: 0.421[<sup>2</sup>](#table1)
- Opponent Network: 0.171[<sup>2</sup>](#table1)
- LAN Wins: 0.040[<sup>2</sup>](#table1)

The average of these factors is 0.287<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 962.5
- 400 + ( ( 0.287 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 962.5


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
|           35 |      111 | 2024-09-14 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -13.38 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           34 |      182 | 2024-09-12 | Sampi             | W   | 1.000      | 0.384        | 0.036 (0.014)    | 1.000 (0.384)    | 0 (0.000) |     9.86 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           33 |      508 | 2024-08-31 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -18.50 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           32 |      527 | 2024-08-30 | Endpoint          | W   | 1.000      | 0.384        | 0.073 (0.028)    | 0.715 (0.275)    | 0 (0.000) |    12.45 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           31 |      735 | 2024-08-26 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -5.13 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           30 |      750 | 2024-08-26 | Falcons           | L   | 1.000      | -            | -                | -                | -         |    -1.61 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           29 |      796 | 2024-08-25 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -0.72 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           28 |      835 | 2024-08-23 | AMKAL             | W   | 1.000      | 0.535        | 0.121 (0.065)    | 0.405 (0.217)    | 0 (0.000) |    14.38 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           27 |      843 | 2024-08-23 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -13.32 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           26 |      849 | 2024-08-23 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -13.52 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           25 |      887 | 2024-08-22 | Rebels            | W   | 1.000      | 0.143        | -                | 0.682 (0.097)    | 0 (0.000) |    12.18 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           24 |      909 | 2024-08-21 | HEROIC            | W   | 1.000      | 0.535        | 0.282 (0.151)    | 0.458 (0.245)    | 0 (0.000) |    29.21 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           23 |      922 | 2024-08-21 | Zero Tenacity     | W   | 1.000      | 0.143        | 0.168 (0.024)    | 1.000 (0.143)    | 0 (0.000) |    15.88 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           22 |      958 | 2024-08-21 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -1.77 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           21 |     1102 | 2024-08-15 | B8                | W   | 0.975      | 0.143        | 0.252 (0.035)    | 1.000 (0.139)    | 0 (0.000) |    20.24 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           20 |     1108 | 2024-08-15 | PARIVISION        | W   | 0.974      | 0.143        | -                | 0.684 (0.095)    | 0 (0.000) |    21.32 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           19 |     1113 | 2024-08-15 | ARCRED            | W   | 0.974      | 0.143        | -                | 0.434 (0.060)    | -         |    15.14 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           18 |     1676 | 2024-07-30 | Complexity        | L   | 0.867      | -            | -                | -                | -         |    -0.57 | F1KU, k1to, MoDo, Nexius, Thomas   |
|           17 |     1714 | 2024-07-29 | Spirit            | L   | 0.859      | -            | -                | -                | -         |    -0.08 | F1KU, k1to, MoDo, Nexius, Thomas   |
|           16 |     3127 | 2024-05-30 | Chinggis Warriors | L   | 0.460      | -            | -                | -                | -         |    -9.03 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           15 |     3155 | 2024-05-29 | ATOX              | L   | 0.452      | -            | -                | -                | -         |    -8.53 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           14 |     3414 | 2024-05-19 | paiN              | L   | 0.386      | -            | -                | -                | -         |    -0.31 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           13 |     3422 | 2024-05-18 | Liquid            | L   | 0.382      | -            | -                | -                | -         |    -0.29 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           12 |     3886 | 2024-05-01 | Insilio           | L   | 0.268      | -            | -                | -                | -         |    -4.36 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           11 |     3915 | 2024-04-30 | Sashi             | L   | 0.260      | -            | -                | -                | -         |    -2.77 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           10 |     4135 | 2024-04-20 | MIBR              | L   | 0.194      | -            | -                | -                | -         |    -0.47 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            9 |     4153 | 2024-04-19 | 9z                | W   | 0.190      | 0.589        | 0.362 (0.041)    | 0.476 (0.053)    | 1 (0.190) |     5.59 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            8 |     4163 | 2024-04-19 | Monte             | W   | 0.189      | -            | -                | -                | 1 (0.189) |     2.61 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            7 |     4208 | 2024-04-18 | MIBR              | L   | 0.182      | -            | -                | -                | -         |    -0.46 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            6 |     4337 | 2024-04-14 | Aurora            | L   | 0.154      | -            | -                | -                | -         |    -0.48 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            5 |     4346 | 2024-04-13 | BetBoom           | W   | 0.148      | 0.684        | 0.220 (0.022)    | -                | -         |     3.65 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            4 |     4355 | 2024-04-13 | BIG               | W   | 0.147      | 0.684        | 0.206 (0.021)    | -                | -         |     4.28 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            3 |     4367 | 2024-04-12 | Ninjas in Pyjamas | W   | 0.140      | 0.684        | 0.230 (0.022)    | -                | -         |     4.08 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            2 |     4438 | 2024-04-10 | ENCE              | W   | 0.127      | -            | -                | -                | -         |     3.21 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            1 |     4518 | 2024-04-08 | Aurora            | L   | 0.114      | -            | -                | -                | -         |    -0.33 | F1KU, HeavyGod, k1to, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,025.33)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-08-25 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-08-04 |      0.900 | $5,000.00      | $4,501.79       |
| 2024-05-02 |      0.274 | $1,000.00      | $274.31         |
| 2024-04-20 |      0.196 | $10,000.00     | $1,956.51       |
| 2024-04-14 |      0.154 | $70,000.00     | $10,792.72      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
