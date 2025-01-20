### Roster Details<br />
Team Name: undefined<br />
Roster: BeaKie, chop, CLASIA, motm, stamina<br />
Global Rank: [158](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_16.md)<br />
Regional Rank: [42]( ../../standings_americas_2025_01_16.md)<br />
<br />
Final Rank Value:  702.1<br />
<br />
Final Rank Value (702.1) = Starting Rank Value (675.5) + Head To Head Adjustments (26.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 675.5
- 400 + ( ( 0.139 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 675.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2226 | 2024-09-21 | Akimbo        | L   | 0.422      | -            | -                | -                | -         |    -6.16 | BeaKie, chop, CLASIA, motm, stamina |
|           13 |     2274 | 2024-09-19 | InControl     | W   | 0.408      | 0.372        | 0.006 (0.001)    | 0.056 (0.009)    | 0 (0.000) |     5.37 | BeaKie, chop, CLASIA, motm, stamina |
|           12 |     2317 | 2024-09-18 | Mythic        | W   | 0.400      | 0.371        | 0.000 (0.000)    | 0.096 (0.014)    | 0 (0.000) |     3.83 | BeaKie, chop, CLASIA, motm, stamina |
|           11 |     2346 | 2024-09-17 | MIGHT         | W   | 0.394      | 0.372        | 0.006 (0.001)    | 0.207 (0.030)    | 0 (0.000) |     8.22 | BeaKie, chop, CLASIA, motm, stamina |
|           10 |     2378 | 2024-09-16 | USA           | W   | 0.387      | 0.371        | 0.000 (0.000)    | 0.031 (0.004)    | 0 (0.000) |     3.08 | BeaKie, chop, CLASIA, motm, stamina |
|            9 |     2396 | 2024-09-15 | Tsunami       | W   | 0.381      | 0.372        | 0.003 (0.000)    | 0.046 (0.007)    | 0 (0.000) |     4.85 | BeaKie, chop, CLASIA, motm, stamina |
|            8 |     2464 | 2024-09-13 | Exceritus     | W   | 0.368      | 0.372        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.45 | BeaKie, chop, CLASIA, motm, stamina |
|            7 |     3328 | 2024-08-19 | FLUFFY AIMERS | L   | 0.200      | -            | -                | -                | -         |    -1.29 | BeaKie, chop, CLASIA, motm, stamina |
|            6 |     3378 | 2024-08-17 | M80           | L   | 0.187      | -            | -                | -                | -         |    -0.35 | BeaKie, chop, CLASIA, motm, stamina |
|            5 |     3463 | 2024-08-14 | Limitless     | W   | 0.167      | 0.371        | 0.003 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     2.40 | BeaKie, chop, CLASIA, motm, stamina |
|            4 |     3640 | 2024-08-08 | USA           | W   | 0.128      | 0.371        | 0.000 (0.000)    | 0.031 (0.001)    | 0 (0.000) |     1.04 | BeaKie, chop, CLASIA, motm, stamina |
|            3 |     3817 | 2024-08-03 | Nouns         | L   | 0.094      | -            | -                | -                | -         |    -0.25 | BeaKie, chop, CLASIA, motm, stamina |
|            2 |     3822 | 2024-08-03 | E-Xolos LAZER | W   | 0.094      | 0.371        | 0.008 (0.000)    | 0.219 (0.008)    | 0 (0.000) |     1.70 | BeaKie, chop, CLASIA, motm, stamina |
|            1 |     4106 | 2024-07-26 | Akimbo        | W   | 0.041      | 0.371        | 0.013 (0.000)    | 0.153 (0.002)    | 0 (0.000) |     0.71 | BeaKie, chop, CLASIA, motm, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,959.24)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.422 | $4,300.00      | $1,813.25       |
| 2024-08-18 |      0.195 | $750.00        | $146.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
