### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, shalfey<br />
Global Rank: [131](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [95]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  769.7<br />
<br />
Final Rank Value (769.7) = Starting Rank Value (739.7) + Head To Head Adjustments (30.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 739.7
- 400 + ( ( 0.171 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 739.7


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
|           16 |     3470 | 2024-08-13 | SINNERS       | W   | 0.181      | 0.500        | 0.103 (0.009)    | 0.698 (0.063)    | 0 (0.000) |     5.00 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           15 |     3520 | 2024-08-12 | KOI           | W   | 0.175      | 0.500        | 0.043 (0.004)    | 0.383 (0.033)    | 0 (0.000) |     4.02 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           14 |     3600 | 2024-08-09 | Nemiga        | L   | 0.154      | -            | -                | -                | -         |    -0.25 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           13 |     3668 | 2024-08-07 | Zero Tenacity | W   | 0.140      | 0.426        | 0.084 (0.005)    | 0.622 (0.037)    | 0 (0.000) |     3.70 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           12 |     3715 | 2024-08-06 | GUN5          | W   | 0.134      | 0.500        | 0.218 (0.015)    | 1.000 (0.067)    | 0 (0.000) |     3.63 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           11 |     3750 | 2024-08-05 | Johnny Speeds | W   | 0.126      | 0.143        | 0.109 (0.002)    | 0.775 (0.014)    | 0 (0.000) |     3.44 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           10 |     3786 | 2024-08-04 | Insilio       | W   | 0.119      | 0.143        | 0.017 (0.000)    | 0.312 (0.005)    | 0 (0.000) |     2.16 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            9 |     3812 | 2024-08-03 | GUN5          | W   | 0.114      | 0.143        | 0.218 (0.004)    | 1.000 (0.016)    | 0 (0.000) |     3.10 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            8 |     3841 | 2024-08-02 | 9INE          | W   | 0.107      | 0.426        | 0.123 (0.006)    | 1.000 (0.046)    | 0 (0.000) |     2.73 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            7 |     3854 | 2024-08-02 | Illuminar     | W   | 0.106      | 0.426        | 0.002 (0.000)    | 0.041 (0.002)    | 0 (0.000) |     1.37 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            6 |     3875 | 2024-08-01 | PARIVISION    | L   | 0.101      | -            | -                | -                | -         |    -1.01 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            5 |     3967 | 2024-07-30 | TSM           | L   | 0.088      | -            | -                | -                | -         |    -0.90 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            4 |     3977 | 2024-07-30 | Insilio       | W   | 0.087      | 0.143        | 0.017 (0.000)    | 0.312 (0.004)    | 0 (0.000) |     1.60 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            3 |     4035 | 2024-07-28 | QUAZAR        | W   | 0.075      | -            | -                | -                | -         |     0.90 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            2 |     4201 | 2024-07-23 | Betera        | W   | 0.041      | -            | -                | -                | -         |     0.54 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            1 |     4432 | 2024-07-17 | 3DMAX         | L   | 0.002      | -            | -                | -                | -         |    -0.00 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,802.33)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
