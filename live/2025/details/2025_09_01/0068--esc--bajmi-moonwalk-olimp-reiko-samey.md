### Roster Details<br />
Team Name: ESC<br />
Roster: bajmi, moonwalk, olimp, reiko, SaMey<br />
Global Rank: [68](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [45]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  934.2<br />
<br />
Final Rank Value (934.2) = Starting Rank Value (818.7) + Head To Head Adjustments (115.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.433[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.142[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.218<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 818.7
- 400 + ( ( 0.218 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 818.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      843 | 2025-07-22 | EYEBALLERS     | W   | 0.926      | 0.435        | 0.022 (0.009)    | 0.576 (0.232)    | 0 (0.000) |    16.83 | bajmi, moonwalk, olimp, reiko, SaMey |
|           14 |      847 | 2025-07-21 | RUBY           | W   | 0.920      | 0.435        | 0.020 (0.008)    | 0.851 (0.340)    | 0 (0.000) |    15.11 | bajmi, moonwalk, olimp, reiko, SaMey |
|           13 |      865 | 2025-07-20 | AMKAL          | W   | 0.913      | 0.435        | 0.004 (0.002)    | 0.275 (0.109)    | 0 (0.000) |     7.70 | bajmi, moonwalk, olimp, reiko, SaMey |
|           12 |     1005 | 2025-07-14 | fnatic         | L   | 0.875      | -            | -                | -                | -         |    -1.58 | bajmi, moonwalk, olimp, reiko, SaMey |
|           11 |     1017 | 2025-07-14 | 9 Pandas       | W   | 0.872      | 0.143        | 0.015 (0.002)    | -                | 0 (0.000) |    10.57 | bajmi, moonwalk, olimp, reiko, SaMey |
|           10 |     1119 | 2025-07-10 | HAWAII         | W   | 0.845      | 0.435        | 0.001 (0.000)    | 0.290 (0.106)    | 0 (0.000) |    11.88 | bajmi, moonwalk, olimp, reiko, SaMey |
|            9 |     1131 | 2025-07-09 | Betera         | W   | 0.841      | 0.143        | 0.009 (0.001)    | 0.718 (0.086)    | 0 (0.000) |    12.97 | bajmi, moonwalk, olimp, reiko, SaMey |
|            8 |     1142 | 2025-07-09 | Partizan       | W   | 0.840      | 0.143        | 0.063 (0.008)    | 1.000 (0.120)    | 0 (0.000) |    16.96 | bajmi, moonwalk, olimp, reiko, SaMey |
|            7 |     1195 | 2025-07-03 | Fire Flux      | W   | 0.800      | 0.435        | 0.002 (0.001)    | 0.323 (0.112)    | 0 (0.000) |    11.21 | bajmi, moonwalk, olimp, reiko, SaMey |
|            6 |     1251 | 2025-06-25 | GUN5           | W   | 0.746      | 0.435        | 0.041 (0.013)    | 0.658 (0.213)    | 0 (0.000) |    14.85 | bajmi, moonwalk, olimp, reiko, SaMey |
|            5 |     1647 | 2025-05-31 | m1x            | L   | 0.581      | -            | -                | -                | -         |   -12.30 | bajmi, moonwalk, olimp, reiko, SaMey |
|            4 |     1767 | 2025-05-22 | FUT            | W   | 0.519      | 0.384        | -                | 0.117 (0.023)    | 0 (0.000) |     5.13 | bajmi, moonwalk, olimp, reiko, SaMey |
|            3 |     1845 | 2025-05-19 | FORZE Reload   | W   | 0.499      | 0.384        | 0.004 (0.001)    | 0.415 (0.080)    | -         |     6.41 | bajmi, moonwalk, olimp, reiko, SaMey |
|            2 |     3591 | 2025-03-17 | RUBY           | L   | 0.081      | -            | -                | -                | -         |    -1.10 | bajmi, Grashog, nestee, reiko, SaMey |
|            1 |     3599 | 2025-03-17 | HEROIC Academy | W   | 0.080      | -            | -                | -                | -         |     0.91 | bajmi, Grashog, nestee, reiko, SaMey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,622.53)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-22 |      0.926 | $22,000.00     | $20,376.59      |
| 2025-06-01 |      0.587 | $419.00        | $245.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
