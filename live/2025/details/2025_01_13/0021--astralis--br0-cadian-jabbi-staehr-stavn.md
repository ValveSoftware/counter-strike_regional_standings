### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, cadiaN, jabbi, Staehr, stavn<br />
Global Rank: [21](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [15]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  1304.4<br />
<br />
Final Rank Value (1304.4) = Starting Rank Value (1314.5) + Head To Head Adjustments (-10.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.674[<sup>1</sup>](#table2)
- Bounty Collected: 0.539[<sup>2</sup>](#table1)
- Opponent Network: 0.098[<sup>2</sup>](#table1)
- LAN Wins: 0.533[<sup>2</sup>](#table1)

The average of these factors is 0.461<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1314.5
- 400 + ( ( 0.461 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1314.5


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
|           25 |      601 | 2024-11-23 | Passion UA        | L   | 0.864      | -            | -                | -                | -         |   -19.70 | br0, cadiaN, jabbi, Staehr, stavn    |
|           24 |      622 | 2024-11-23 | Eternal Fire      | W   | 0.859      | 0.143        | 0.349 (0.043)    | 0.292 (0.036)    | 1 (0.859) |    15.46 | br0, cadiaN, jabbi, Staehr, stavn    |
|           23 |      650 | 2024-11-22 | B8                | W   | 0.852      | 0.143        | 0.166 (0.020)    | 0.520 (0.063)    | 1 (0.852) |     9.27 | br0, cadiaN, jabbi, Staehr, stavn    |
|           22 |      672 | 2024-11-21 | Sashi             | L   | 0.846      | -            | -                | -                | -         |   -22.27 | br0, cadiaN, jabbi, Staehr, stavn    |
|           21 |      683 | 2024-11-20 | 9 Pandas          | L   | 0.844      | -            | -                | -                | -         |   -17.73 | br0, cadiaN, jabbi, Staehr, stavn    |
|           20 |     1102 | 2024-11-02 | Spirit            | L   | 0.720      | -            | -                | -                | -         |    -0.66 | cadiaN, device, jabbi, Staehr, stavn |
|           19 |     1150 | 2024-10-31 | MOUZ              | W   | 0.705      | 1.000        | 0.690 (0.487)    | 0.477 (0.337)    | 1 (0.705) |    20.72 | cadiaN, device, jabbi, Staehr, stavn |
|           18 |     1172 | 2024-10-30 | Natus Vincere     | W   | 0.698      | 1.000        | 1.000 (0.698)    | 0.480 (0.335)    | 1 (0.698) |    20.73 | cadiaN, device, jabbi, Staehr, stavn |
|           17 |     1564 | 2024-10-09 | Virtus.pro        | L   | 0.560      | -            | -                | -                | -         |    -8.34 | cadiaN, device, jabbi, Staehr, stavn |
|           16 |     1599 | 2024-10-08 | HEROIC            | L   | 0.554      | -            | -                | -                | -         |    -1.44 | cadiaN, device, jabbi, Staehr, stavn |
|           15 |     1623 | 2024-10-07 | Eternal Fire      | W   | 0.548      | 0.624        | 0.349 (0.119)    | 0.292 (0.100)    | 1 (0.548) |    11.71 | cadiaN, device, jabbi, Staehr, stavn |
|           14 |     2013 | 2024-09-26 | Spirit            | L   | 0.474      | -            | -                | -                | -         |    -0.34 | cadiaN, device, jabbi, Staehr, stavn |
|           13 |     2072 | 2024-09-25 | Vitality          | L   | 0.467      | -            | -                | -                | -         |    -0.74 | cadiaN, device, jabbi, Staehr, stavn |
|           12 |     2409 | 2024-09-14 | Complexity        | L   | 0.394      | -            | -                | -                | -         |    -5.34 | br0, device, jabbi, Staehr, stavn    |
|           11 |     2451 | 2024-09-13 | Rooster           | W   | 0.387      | 0.889        | 0.013 (0.004)    | 0.134 (0.046)    | 1 (0.387) |     0.38 | br0, device, jabbi, Staehr, stavn    |
|           10 |     2512 | 2024-09-11 | Complexity        | L   | 0.374      | -            | -                | -                | -         |    -5.33 | br0, device, jabbi, Staehr, stavn    |
|            9 |     2548 | 2024-09-10 | fnatic            | L   | 0.366      | -            | -                | -                | -         |    -8.18 | br0, device, jabbi, Staehr, stavn    |
|            8 |     3518 | 2024-08-12 | G2                | L   | 0.175      | -            | -                | -                | -         |    -0.13 | br0, device, jabbi, Staehr, stavn    |
|            7 |     3552 | 2024-08-11 | Natus Vincere     | L   | 0.167      | -            | -                | -                | -         |    -0.41 | br0, device, jabbi, Staehr, stavn    |
|            6 |     3571 | 2024-08-10 | 9z                | W   | 0.160      | 1.000        | 0.060 (0.010)    | 0.193 (0.031)    | 1 (0.160) |     0.74 | br0, device, jabbi, Staehr, stavn    |
|            5 |     3781 | 2024-08-04 | Ninjas in Pyjamas | W   | 0.120      | 0.581        | 0.080 (0.006)    | 0.250 (0.017)    | 1 (0.120) |     0.94 | br0, device, jabbi, Staehr, stavn    |
|            4 |     3810 | 2024-08-03 | Vitality          | L   | 0.114      | -            | -                | -                | -         |    -0.20 | br0, device, jabbi, Staehr, stavn    |
|            3 |     3851 | 2024-08-02 | Falcons           | W   | 0.107      | 0.581        | 0.087 (0.005)    | 0.161 (0.010)    | 1 (0.107) |     0.47 | br0, device, jabbi, Staehr, stavn    |
|            2 |     3976 | 2024-07-30 | Vitality          | L   | 0.087      | -            | -                | -                | -         |    -0.15 | br0, device, jabbi, Staehr, stavn    |
|            1 |     4004 | 2024-07-29 | Falcons           | W   | 0.081      | 0.581        | 0.087 (0.004)    | 0.161 (0.008)    | 1 (0.081) |     0.35 | br0, device, jabbi, Staehr, stavn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($77,651.38)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.726 | $85,000.00     | $61,689.56      |
| 2024-10-13 |      0.588 | $5,000.00      | $2,941.43       |
| 2024-09-29 |      0.494 | $10,000.00     | $4,941.83       |
| 2024-09-22 |      0.448 | $7,000.00      | $3,137.39       |
| 2024-08-18 |      0.215 | $16,000.00     | $3,436.67       |
| 2024-08-04 |      0.120 | $12,500.00     | $1,504.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
