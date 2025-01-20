### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, shalfey<br />
Global Rank: [136](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [100]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  755.8<br />
<br />
Final Rank Value (755.8) = Starting Rank Value (732.4) + Head To Head Adjustments (23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 732.4
- 400 + ( ( 0.168 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 732.4


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
|           15 |     3474 | 2024-08-13 | SINNERS       | W   | 0.153      | 0.500        | 0.101 (0.008)    | 0.683 (0.052)    | 0 (0.000) |     4.22 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           14 |     3524 | 2024-08-12 | KOI           | W   | 0.146      | 0.500        | 0.043 (0.003)    | 0.386 (0.028)    | 0 (0.000) |     3.41 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           13 |     3604 | 2024-08-09 | Nemiga        | L   | 0.125      | -            | -                | -                | -         |    -0.20 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           12 |     3672 | 2024-08-07 | Zero Tenacity | W   | 0.112      | 0.426        | 0.083 (0.004)    | 0.570 (0.027)    | 0 (0.000) |     2.96 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           11 |     3719 | 2024-08-06 | GUN5          | W   | 0.105      | 0.500        | 0.224 (0.012)    | 1.000 (0.053)    | 0 (0.000) |     2.88 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           10 |     3754 | 2024-08-05 | Johnny Speeds | W   | 0.097      | 0.143        | 0.109 (0.002)    | 0.770 (0.011)    | 0 (0.000) |     2.66 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            9 |     3790 | 2024-08-04 | Insilio       | W   | 0.091      | 0.143        | 0.017 (0.000)    | 0.301 (0.004)    | 0 (0.000) |     1.64 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            8 |     3816 | 2024-08-03 | GUN5          | W   | 0.085      | 0.143        | 0.224 (0.003)    | 1.000 (0.012)    | 0 (0.000) |     2.34 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            7 |     3845 | 2024-08-02 | 9INE          | W   | 0.079      | 0.426        | 0.125 (0.004)    | 1.000 (0.034)    | 0 (0.000) |     2.02 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            6 |     3858 | 2024-08-02 | Illuminar     | W   | 0.077      | 0.426        | 0.002 (0.000)    | 0.035 (0.001)    | 0 (0.000) |     1.01 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            5 |     3879 | 2024-08-01 | PARIVISION    | L   | 0.073      | -            | -                | -                | -         |    -0.75 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            4 |     3971 | 2024-07-30 | TSM           | L   | 0.060      | -            | -                | -                | -         |    -0.60 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            3 |     3981 | 2024-07-30 | Insilio       | W   | 0.059      | 0.143        | 0.017 (0.000)    | 0.301 (0.003)    | 0 (0.000) |     1.08 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            2 |     4039 | 2024-07-28 | QUAZAR        | W   | 0.046      | -            | -                | -                | -         |     0.57 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            1 |     4205 | 2024-07-23 | Betera        | W   | 0.013      | -            | -                | -                | -         |     0.17 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,631.52)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
