### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, MoDo, Nexius<br />
Global Rank: [43](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [33]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  1064.9<br />
<br />
Final Rank Value (1064.9) = Starting Rank Value (980.4) + Head To Head Adjustments (84.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.543[<sup>1</sup>](#table2)
- Bounty Collected: 0.435[<sup>2</sup>](#table1)
- Opponent Network: 0.124[<sup>2</sup>](#table1)
- LAN Wins: 0.070[<sup>2</sup>](#table1)

The average of these factors is 0.293<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 980.4
- 400 + ( ( 0.293 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 980.4


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
|           31 |      124 | 2024-08-26 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -5.74 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           30 |      139 | 2024-08-26 | Falcons           | L   | 1.000      | -            | -                | -                | -         |    -1.83 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           29 |      185 | 2024-08-25 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -0.90 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           28 |      224 | 2024-08-23 | AMKAL             | W   | 1.000      | 0.535        | 0.144 (0.077)    | 0.393 (0.210)    | 0 (0.000) |    13.85 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           27 |      232 | 2024-08-23 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -13.71 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           26 |      238 | 2024-08-23 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -14.51 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           25 |      276 | 2024-08-22 | Rebels            | W   | 1.000      | 0.143        | -                | 0.640 (0.091)    | 0 (0.000) |    10.37 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           24 |      298 | 2024-08-21 | HEROIC            | W   | 1.000      | 0.535        | 0.225 (0.120)    | 0.379 (0.203)    | 0 (0.000) |    27.49 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           23 |      311 | 2024-08-21 | Zero Tenacity     | W   | 1.000      | 0.143        | 0.159 (0.023)    | 1.000 (0.143)    | 0 (0.000) |    14.81 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           22 |      347 | 2024-08-21 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -1.96 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           21 |      491 | 2024-08-15 | B8                | W   | 1.000      | 0.143        | 0.168 (0.024)    | 1.000 (0.143)    | 0 (0.000) |    19.34 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           20 |      497 | 2024-08-15 | PARIVISION        | W   | 1.000      | 0.143        | -                | 0.703 (0.100)    | 0 (0.000) |    21.26 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           19 |      502 | 2024-08-15 | ARCRED            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.19 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           18 |     1065 | 2024-07-30 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -1.49 | F1KU, k1to, MoDo, Nexius, Thomas   |
|           17 |     1103 | 2024-07-29 | Spirit            | L   | 0.998      | -            | -                | -                | -         |    -0.28 | F1KU, k1to, MoDo, Nexius, Thomas   |
|           16 |     2516 | 2024-05-30 | Chinggis Warriors | L   | 0.599      | -            | -                | -                | -         |   -11.15 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           15 |     2544 | 2024-05-29 | ATOX              | L   | 0.591      | -            | -                | -                | -         |   -13.91 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           14 |     2803 | 2024-05-19 | paiN              | L   | 0.525      | -            | -                | -                | -         |    -0.73 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           13 |     2811 | 2024-05-18 | Liquid            | L   | 0.521      | -            | -                | -                | -         |    -0.46 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           12 |     3275 | 2024-05-01 | Insilio           | L   | 0.407      | -            | -                | -                | -         |    -8.35 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           11 |     3304 | 2024-04-30 | Sashi             | L   | 0.400      | -            | -                | -                | -         |    -4.42 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           10 |     3524 | 2024-04-20 | MIBR              | L   | 0.333      | -            | -                | -                | -         |    -1.37 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            9 |     3542 | 2024-04-19 | 9z                | W   | 0.329      | 0.589        | 0.398 (0.077)    | 0.523 (0.101)    | 1 (0.329) |     9.79 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            8 |     3552 | 2024-04-19 | Monte             | W   | 0.328      | 0.589        | 0.093 (0.018)    | -                | 1 (0.328) |     5.02 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            7 |     3597 | 2024-04-18 | MIBR              | L   | 0.321      | -            | -                | -                | -         |    -1.42 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            6 |     3726 | 2024-04-14 | Aurora            | L   | 0.294      | -            | -                | -                | -         |    -0.53 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            5 |     3735 | 2024-04-13 | BetBoom           | W   | 0.287      | 0.684        | 0.273 (0.054)    | 0.497 (0.098)    | 0 (0.000) |     7.55 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            4 |     3744 | 2024-04-13 | BIG               | W   | 0.286      | 0.684        | 0.172 (0.034)    | 0.334 (0.065)    | -         |     7.41 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            3 |     3756 | 2024-04-12 | Ninjas in Pyjamas | W   | 0.280      | 0.684        | 0.245 (0.047)    | 0.443 (0.085)    | -         |     8.29 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            2 |     3827 | 2024-04-10 | ENCE              | W   | 0.266      | 0.684        | 0.156 (0.028)    | -                | -         |     7.27 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            1 |     3907 | 2024-04-08 | Aurora            | L   | 0.254      | -            | -                | -                | -         |    -0.38 | F1KU, HeavyGod, k1to, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,813.30)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-25 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-08-04 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-02 |      0.414 | $1,000.00      | $413.69         |
| 2024-04-20 |      0.335 | $10,000.00     | $3,350.31       |
| 2024-04-14 |      0.294 | $70,000.00     | $20,549.30      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
