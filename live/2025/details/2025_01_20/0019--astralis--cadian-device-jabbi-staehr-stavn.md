### Roster Details<br />
Team Name: Astralis<br />
Roster: cadiaN, device, jabbi, Staehr, stavn<br />
Global Rank: [19](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [13]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1307.5<br />
<br />
Final Rank Value (1307.5) = Starting Rank Value (1303.5) + Head To Head Adjustments (3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.672[<sup>1</sup>](#table2)
- Bounty Collected: 0.531[<sup>2</sup>](#table1)
- Opponent Network: 0.108[<sup>2</sup>](#table1)
- LAN Wins: 0.509[<sup>2</sup>](#table1)

The average of these factors is 0.455<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1303.5
- 400 + ( ( 0.455 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1303.5


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
|           27 |        4 | 2025-01-18 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |    -2.79 | cadiaN, device, jabbi, Staehr, stavn |
|           26 |       19 | 2025-01-15 | Wildcard          | W   | 1.000      | 0.143        | 0.232 (0.033)    | 0.638 (0.091)    | -         |    17.67 | cadiaN, device, jabbi, Staehr, stavn |
|           25 |      614 | 2024-11-23 | Passion UA        | L   | 0.822      | -            | -                | -                | -         |   -18.65 | br0, cadiaN, jabbi, Staehr, stavn    |
|           24 |      635 | 2024-11-23 | Eternal Fire      | W   | 0.817      | 0.143        | 0.324 (0.038)    | 0.364 (0.043)    | 1 (0.817) |    14.21 | br0, cadiaN, jabbi, Staehr, stavn    |
|           23 |      663 | 2024-11-22 | B8                | W   | 0.810      | 0.143        | 0.162 (0.019)    | 0.490 (0.057)    | 1 (0.810) |     8.53 | br0, cadiaN, jabbi, Staehr, stavn    |
|           22 |      685 | 2024-11-21 | Sashi             | L   | 0.804      | -            | -                | -                | -         |   -21.25 | br0, cadiaN, jabbi, Staehr, stavn    |
|           21 |      696 | 2024-11-20 | 9 Pandas          | L   | 0.802      | -            | -                | -                | -         |   -16.82 | br0, cadiaN, jabbi, Staehr, stavn    |
|           20 |     1115 | 2024-11-02 | Spirit            | L   | 0.678      | -            | -                | -                | -         |    -0.57 | cadiaN, device, jabbi, Staehr, stavn |
|           19 |     1163 | 2024-10-31 | MOUZ              | W   | 0.663      | 1.000        | 0.673 (0.447)    | 0.481 (0.319)    | 1 (0.663) |    19.54 | cadiaN, device, jabbi, Staehr, stavn |
|           18 |     1185 | 2024-10-30 | Natus Vincere     | W   | 0.656      | 1.000        | 1.000 (0.656)    | 0.570 (0.374)    | 1 (0.656) |    19.43 | cadiaN, device, jabbi, Staehr, stavn |
|           17 |     1577 | 2024-10-09 | Virtus.pro        | L   | 0.518      | -            | -                | -                | -         |    -7.61 | cadiaN, device, jabbi, Staehr, stavn |
|           16 |     1612 | 2024-10-08 | Falcons           | L   | 0.512      | -            | -                | -                | -         |    -1.18 | cadiaN, device, jabbi, Staehr, stavn |
|           15 |     1636 | 2024-10-07 | Eternal Fire      | W   | 0.506      | 0.624        | 0.324 (0.102)    | 0.364 (0.115)    | 1 (0.506) |    10.39 | cadiaN, device, jabbi, Staehr, stavn |
|           14 |     2026 | 2024-09-26 | Spirit            | L   | 0.432      | -            | -                | -                | -         |    -0.28 | cadiaN, device, jabbi, Staehr, stavn |
|           13 |     2085 | 2024-09-25 | Vitality          | L   | 0.425      | -            | -                | -                | -         |    -0.76 | cadiaN, device, jabbi, Staehr, stavn |
|           12 |     2422 | 2024-09-14 | Complexity        | L   | 0.352      | -            | -                | -                | -         |    -4.98 | br0, device, jabbi, Staehr, stavn    |
|           11 |     2464 | 2024-09-13 | Rooster           | W   | 0.345      | 0.889        | 0.013 (0.004)    | 0.127 (0.039)    | 1 (0.345) |     0.36 | br0, device, jabbi, Staehr, stavn    |
|           10 |     2525 | 2024-09-11 | Complexity        | L   | 0.332      | -            | -                | -                | -         |    -4.92 | br0, device, jabbi, Staehr, stavn    |
|            9 |     2561 | 2024-09-10 | fnatic            | L   | 0.324      | -            | -                | -                | -         |    -7.27 | br0, device, jabbi, Staehr, stavn    |
|            8 |     3531 | 2024-08-12 | G2                | L   | 0.133      | -            | -                | -                | -         |    -0.09 | br0, device, jabbi, Staehr, stavn    |
|            7 |     3565 | 2024-08-11 | Natus Vincere     | L   | 0.125      | -            | -                | -                | -         |    -0.32 | br0, device, jabbi, Staehr, stavn    |
|            6 |     3584 | 2024-08-10 | 9z                | W   | 0.118      | 1.000        | 0.058 (0.007)    | 0.187 (0.022)    | 1 (0.118) |     0.53 | br0, device, jabbi, Staehr, stavn    |
|            5 |     3794 | 2024-08-04 | Ninjas in Pyjamas | W   | 0.078      | 0.581        | 0.078 (0.004)    | 0.250 (0.011)    | 1 (0.078) |     0.59 | br0, device, jabbi, Staehr, stavn    |
|            4 |     3823 | 2024-08-03 | Vitality          | L   | 0.072      | -            | -                | -                | -         |    -0.14 | br0, device, jabbi, Staehr, stavn    |
|            3 |     3864 | 2024-08-02 | Falcons           | W   | 0.065      | 0.581        | 0.080 (0.003)    | 0.148 (0.006)    | 1 (0.065) |     0.26 | br0, device, jabbi, Staehr, stavn    |
|            2 |     3989 | 2024-07-30 | Vitality          | L   | 0.045      | -            | -                | -                | -         |    -0.09 | br0, device, jabbi, Staehr, stavn    |
|            1 |     4017 | 2024-07-29 | Falcons           | W   | 0.039      | -            | -                | -                | 1 (0.039) |     0.16 | br0, device, jabbi, Staehr, stavn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($71,955.15)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.684 | $85,000.00     | $58,116.28      |
| 2024-10-13 |      0.546 | $5,000.00      | $2,731.24       |
| 2024-09-29 |      0.452 | $10,000.00     | $4,521.45       |
| 2024-09-22 |      0.406 | $7,000.00      | $2,843.12       |
| 2024-08-18 |      0.173 | $16,000.00     | $2,764.05       |
| 2024-08-04 |      0.078 | $12,500.00     | $979.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
