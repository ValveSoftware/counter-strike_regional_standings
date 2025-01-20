### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, shalfey<br />
Global Rank: [138](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [98]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  758.6<br />
<br />
Final Rank Value (758.6) = Starting Rank Value (733.7) + Head To Head Adjustments (24.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 733.7
- 400 + ( ( 0.168 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 733.7


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
|           15 |     3497 | 2024-08-13 | SINNERS       | W   | 0.159      | 0.500        | 0.101 (0.008)    | 0.686 (0.055)    | 0 (0.000) |     4.39 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           14 |     3547 | 2024-08-12 | KOI           | W   | 0.152      | 0.500        | 0.043 (0.003)    | 0.385 (0.029)    | 0 (0.000) |     3.54 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           13 |     3627 | 2024-08-09 | Nemiga        | L   | 0.132      | -            | -                | -                | -         |    -0.21 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           12 |     3695 | 2024-08-07 | Zero Tenacity | W   | 0.118      | 0.426        | 0.084 (0.004)    | 0.572 (0.029)    | 0 (0.000) |     3.12 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           11 |     3742 | 2024-08-06 | GUN5          | W   | 0.112      | 0.500        | 0.224 (0.012)    | 1.000 (0.056)    | 0 (0.000) |     3.05 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           10 |     3777 | 2024-08-05 | Johnny Speeds | W   | 0.103      | 0.143        | 0.109 (0.002)    | 0.772 (0.011)    | 0 (0.000) |     2.83 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            9 |     3813 | 2024-08-04 | Insilio       | W   | 0.097      | 0.143        | 0.017 (0.000)    | 0.303 (0.004)    | 0 (0.000) |     1.74 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            8 |     3839 | 2024-08-03 | GUN5          | W   | 0.091      | 0.143        | 0.224 (0.003)    | 1.000 (0.013)    | 0 (0.000) |     2.51 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            7 |     3868 | 2024-08-02 | 9INE          | W   | 0.085      | 0.426        | 0.125 (0.005)    | 1.000 (0.036)    | 0 (0.000) |     2.17 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            6 |     3881 | 2024-08-02 | Illuminar     | W   | 0.083      | 0.426        | 0.002 (0.000)    | 0.036 (0.001)    | 0 (0.000) |     1.09 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            5 |     3902 | 2024-08-01 | PARIVISION    | L   | 0.079      | -            | -                | -                | -         |    -0.80 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            4 |     3994 | 2024-07-30 | TSM           | L   | 0.066      | -            | -                | -                | -         |    -0.66 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            3 |     4004 | 2024-07-30 | Insilio       | W   | 0.065      | 0.143        | 0.017 (0.000)    | 0.303 (0.003)    | 0 (0.000) |     1.19 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            2 |     4062 | 2024-07-28 | QUAZAR        | W   | 0.053      | -            | -                | -                | -         |     0.64 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            1 |     4228 | 2024-07-23 | Betera        | W   | 0.019      | -            | -                | -                | -         |     0.25 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,668.16)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
