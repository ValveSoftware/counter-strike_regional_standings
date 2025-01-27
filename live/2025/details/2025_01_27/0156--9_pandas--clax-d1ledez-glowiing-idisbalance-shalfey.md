### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, shalfey<br />
Global Rank: [156](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [104]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  715.0<br />
<br />
Final Rank Value (715.0) = Starting Rank Value (706.0) + Head To Head Adjustments (9.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.357[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.0
- 400 + ( ( 0.156 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 706.0


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
|           11 |     3686 | 2024-08-13 | SINNERS       | W   | 0.087      | 0.500        | 0.095 (0.004)    | 0.718 (0.031)    | 0 (0.000) |     2.42 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           10 |     3736 | 2024-08-12 | Iberian Soul  | W   | 0.080      | 0.500        | 0.043 (0.002)    | 0.449 (0.018)    | 0 (0.000) |     1.97 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            9 |     3816 | 2024-08-09 | Nemiga        | L   | 0.060      | -            | -                | -                | -         |    -0.09 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            8 |     3884 | 2024-08-07 | Zero Tenacity | W   | 0.046      | 0.426        | 0.081 (0.002)    | 0.719 (0.014)    | 0 (0.000) |     1.26 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            7 |     3931 | 2024-08-06 | GUN5          | W   | 0.040      | 0.500        | 0.227 (0.005)    | 0.988 (0.020)    | 0 (0.000) |     1.10 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            6 |     3966 | 2024-08-05 | Johnny Speeds | W   | 0.032      | 0.143        | 0.107 (0.000)    | 0.736 (0.003)    | 0 (0.000) |     0.87 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            5 |     4002 | 2024-08-04 | Insilio       | W   | 0.025      | 0.143        | 0.015 (0.000)    | 0.273 (0.001)    | 0 (0.000) |     0.46 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            4 |     4028 | 2024-08-03 | GUN5          | W   | 0.019      | 0.143        | 0.227 (0.001)    | 0.988 (0.003)    | 0 (0.000) |     0.54 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            3 |     4057 | 2024-08-02 | 9INE          | W   | 0.013      | 0.426        | 0.125 (0.001)    | 1.000 (0.006)    | 0 (0.000) |     0.34 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            2 |     4070 | 2024-08-02 | Illuminar     | W   | 0.012      | 0.426        | 0.002 (0.000)    | 0.021 (0.000)    | 0 (0.000) |     0.16 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|            1 |     4091 | 2024-08-01 | PARIVISION    | L   | 0.007      | -            | -                | -                | -         |    -0.07 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,237.47)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
