### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, HeavyGod, k1to, MoDo, Nexius<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [46](../standings_global.md)<br />
Regional Rank: [33]( ../standings_europe.md)<br />
Final Rank Value:  1141.0<br />
<br />
Final Rank Value (1141.0) = Starting Rank Value (1135.7) + Head To Head Adjustments (5.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.596[<sup>1</sup>](#table2)
- Bounty Collected: 0.482[<sup>2</sup>](#table1)
- Opponent Network: 0.127[<sup>2</sup>](#table1)
- LAN Wins: 0.165[<sup>2</sup>](#table1)

The average of these factors is 0.343<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1135.7
- 400 + ( ( 0.343 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1135.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      983 | 2024-05-30 | Chinggis Warriors | L   | 0.879      | -            | -                | -                | -         |   -25.23 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           26 |     1011 | 2024-05-29 | ATOX              | L   | 0.871      | -            | -                | -                | -         |   -21.30 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           25 |     1270 | 2024-05-19 | paiN              | L   | 0.806      | -            | -                | -                | -         |    -3.40 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           24 |     1278 | 2024-05-18 | Liquid            | L   | 0.802      | -            | -                | -                | -         |    -2.56 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           23 |     1742 | 2024-05-01 | Insilio           | L   | 0.687      | -            | -                | -                | -         |   -16.52 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           22 |     1771 | 2024-04-30 | Sashi             | L   | 0.680      | -            | -                | -                | -         |   -10.93 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           21 |     1991 | 2024-04-20 | MIBR              | L   | 0.613      | -            | -                | -                | -         |    -2.02 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           20 |     2009 | 2024-04-19 | 9z                | W   | 0.610      | 0.589        | 0.606 (0.217)    | 0.728 (0.261)    | 1 (0.610) |    18.10 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           19 |     2019 | 2024-04-19 | Monte             | W   | 0.608      | 0.589        | 0.103 (0.037)    | 0.241 (0.086)    | 1 (0.608) |     7.60 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           18 |     2064 | 2024-04-18 | MIBR              | L   | 0.601      | -            | -                | -                | -         |    -2.00 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           17 |     2193 | 2024-04-14 | Aurora            | L   | 0.574      | -            | -                | -                | -         |    -1.40 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           16 |     2202 | 2024-04-13 | BetBoom           | W   | 0.568      | 0.684        | 0.403 (0.156)    | 0.704 (0.273)    | 0 (0.000) |    16.07 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           15 |     2211 | 2024-04-13 | BIG               | W   | 0.566      | 0.684        | 0.212 (0.082)    | 0.382 (0.148)    | 0 (0.000) |    13.44 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           14 |     2223 | 2024-04-12 | Ninjas in Pyjamas | W   | 0.560      | 0.684        | 0.343 (0.131)    | 0.534 (0.204)    | 0 (0.000) |    17.06 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           13 |     2294 | 2024-04-10 | ENCE              | W   | 0.547      | 0.684        | 0.212 (0.079)    | 0.377 (0.141)    | 0 (0.000) |    14.28 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           12 |     2374 | 2024-04-08 | Aurora            | L   | 0.534      | -            | -                | -                | -         |    -0.93 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           11 |     2995 | 2024-03-10 | SAW               | L   | 0.341      | -            | -                | -                | -         |    -3.40 | F1KU, k1to, Nexius, regali, s0und    |
|           10 |     3021 | 2024-03-09 | HEROIC            | W   | 0.333      | 0.535        | 0.333 (0.059)    | 0.448 (0.080)    | 0 (0.000) |    10.18 | F1KU, HeavyGod, k1to, Nexius, regali |
|            9 |     3060 | 2024-03-07 | Complexity        | W   | 0.321      | 0.535        | 0.445 (0.076)    | 0.412 (0.071)    | 0 (0.000) |     9.91 | F1KU, HeavyGod, k1to, Nexius, regali |
|            8 |     3404 | 2024-02-21 | GamerLegion       | L   | 0.220      | -            | -                | -                | -         |    -5.18 | F1KU, HeavyGod, k1to, Nexius, regali |
|            7 |     3437 | 2024-02-20 | Gaimin Gladiators | L   | 0.212      | -            | -                | -                | -         |    -3.60 | F1KU, HeavyGod, k1to, Nexius, regali |
|            6 |     3455 | 2024-02-19 | ex-Preasy         | W   | 0.207      | 0.143        | 0.028 (0.001)    | 0.199 (0.006)    | 1 (0.207) |     1.21 | F1KU, HeavyGod, k1to, Nexius, regali |
|            5 |     3462 | 2024-02-19 | Apeks             | L   | 0.206      | -            | -                | -                | -         |    -4.07 | F1KU, HeavyGod, k1to, Nexius, regali |
|            4 |     3964 | 2024-01-23 | Falcons           | L   | 0.028      | -            | -                | -                | -         |    -0.07 | F1KU, HeavyGod, k1to, Nexius, regali |
|            3 |     3996 | 2024-01-22 | Vitality          | L   | 0.020      | -            | -                | -                | -         |    -0.01 | F1KU, HeavyGod, k1to, Nexius, regali |
|            2 |     4058 | 2024-01-20 | Nexus             | W   | 0.008      | 0.143        | 0.011 (0.000)    | 0.432 (0.000)    | 0 (0.000) |     0.04 | F1KU, HeavyGod, k1to, Nexius, regali |
|            1 |     4063 | 2024-01-20 | BetBoom           | L   | 0.007      | -            | -                | -                | -         |    -0.01 | F1KU, HeavyGod, k1to, Nexius, regali |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($51,577.03)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      0.694 | $1,000.00      | $693.85         |
| 2024-04-20 |      0.615 | $10,000.00     | $6,151.91       |
| 2024-04-14 |      0.574 | $70,000.00     | $40,160.47      |
| 2024-03-10 |      0.341 | $12,500.00     | $4,267.27       |
| 2024-01-28 |      0.061 | $5,000.00      | $303.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
