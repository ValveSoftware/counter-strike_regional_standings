### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, shalfey<br />
Global Rank: [137](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [100]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  749.2<br />
<br />
Final Rank Value (749.2) = Starting Rank Value (729.0) + Head To Head Adjustments (20.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.0
- 400 + ( ( 0.166 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 729.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3483 | 2024-08-13 | SINNERS       | W   | 0.139      | 0.500        | 0.100 (0.007)    | 0.676 (0.047)    | 0 (0.000) |     3.85 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           13 |     3533 | 2024-08-12 | KOI           | W   | 0.133      | 0.500        | 0.043 (0.003)    | 0.387 (0.026)    | 0 (0.000) |     3.12 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           12 |     3613 | 2024-08-09 | Nemiga        | L   | 0.112      | -            | -                | -                | -         |    -0.18 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           11 |     3681 | 2024-08-07 | Zero Tenacity | W   | 0.098      | 0.426        | 0.083 (0.003)    | 0.567 (0.024)    | 0 (0.000) |     2.60 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           10 |     3728 | 2024-08-06 | GUN5          | W   | 0.092      | 0.500        | 0.225 (0.010)    | 1.000 (0.046)    | 0 (0.000) |     2.52 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            9 |     3763 | 2024-08-05 | Johnny Speeds | W   | 0.084      | 0.143        | 0.108 (0.001)    | 0.764 (0.009)    | 0 (0.000) |     2.29 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            8 |     3799 | 2024-08-04 | Insilio       | W   | 0.077      | 0.143        | 0.016 (0.000)    | 0.296 (0.003)    | 0 (0.000) |     1.40 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            7 |     3825 | 2024-08-03 | GUN5          | W   | 0.072      | 0.143        | 0.225 (0.002)    | 1.000 (0.010)    | 0 (0.000) |     1.98 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            6 |     3854 | 2024-08-02 | 9INE          | W   | 0.065      | 0.426        | 0.125 (0.003)    | 1.000 (0.028)    | 0 (0.000) |     1.67 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            5 |     3867 | 2024-08-02 | Illuminar     | W   | 0.064      | 0.426        | 0.002 (0.000)    | 0.033 (0.001)    | 0 (0.000) |     0.84 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            4 |     3888 | 2024-08-01 | PARIVISION    | L   | 0.059      | -            | -                | -                | -         |    -0.62 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            3 |     3980 | 2024-07-30 | TSM           | L   | 0.046      | -            | -                | -                | -         |    -0.46 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            2 |     3990 | 2024-07-30 | Insilio       | W   | 0.045      | 0.143        | 0.016 (0.000)    | 0.296 (0.002)    | 0 (0.000) |     0.83 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            1 |     4048 | 2024-07-28 | QUAZAR        | W   | 0.033      | -            | -                | -                | -         |     0.41 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,550.09)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
