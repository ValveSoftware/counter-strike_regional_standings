### Roster Details<br />
Team Name: Bromo<br />
Roster: FIOURN, Miami, rage, SPine, Zy88<br />
Global Rank: [161](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_12_31.md)<br />
Regional Rank: [13]( ../../standings_asia_2024_12_31.md)<br />
<br />
Final Rank Value:  702.5<br />
<br />
Final Rank Value (702.5) = Starting Rank Value (682.8) + Head To Head Adjustments (19.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 682.8
- 400 + ( ( 0.145 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 682.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1053 | 2024-11-02 | Lynn Vision       | L   | 0.817      | -            | -                | -                | -         |    -4.86 | FIOURN, Miami, rage, SPine, Zy88 |
|           15 |     1332 | 2024-10-18 | Chinggis Warriors | W   | 0.718      | 0.143        | 0.035 (0.004)    | 0.334 (0.034)    | 0 (0.000) |    17.61 | FIOURN, Miami, rage, SPine, Zy88 |
|           14 |     1390 | 2024-10-16 | TYLOO             | L   | 0.705      | -            | -                | -                | -         |    -5.12 | FIOURN, Miami, rage, SPine, Zy88 |
|           13 |     1410 | 2024-10-15 | The Huns          | W   | 0.699      | 0.143        | 0.048 (0.005)    | 0.347 (0.035)    | 0 (0.000) |    18.91 | FIOURN, Miami, rage, SPine, Zy88 |
|           12 |     2881 | 2024-08-28 | Teamwork          | L   | 0.378      | -            | -                | -                | -         |    -8.55 | FIOURN, Miami, rage, SPine, Zy88 |
|           11 |     2897 | 2024-08-28 | CatEvil           | W   | 0.377      | 0.143        | 0.000 (0.000)    | 0.178 (0.010)    | 0 (0.000) |     4.00 | FIOURN, Miami, rage, SPine, Zy88 |
|           10 |     2932 | 2024-08-27 | Steel Helmet      | W   | 0.372      | 0.143        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     2.02 | FIOURN, Miami, rage, SPine, Zy88 |
|            9 |     2952 | 2024-08-27 | Teamwork          | L   | 0.370      | -            | -                | -                | -         |    -8.55 | FIOURN, Miami, rage, SPine, Zy88 |
|            8 |     3056 | 2024-08-25 | Teamwork          | W   | 0.358      | 0.143        | 0.000 (0.000)    | 0.063 (0.003)    | 0 (0.000) |     3.02 | FIOURN, Miami, rage, SPine, Zy88 |
|            7 |     3058 | 2024-08-25 | XNL               | W   | 0.357      | 0.143        | 0.000 (0.000)    | 0.031 (0.002)    | 0 (0.000) |     1.97 | FIOURN, Miami, rage, SPine, Zy88 |
|            6 |     3063 | 2024-08-25 | Steel Helmet      | W   | 0.357      | 0.143        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     1.89 | FIOURN, Miami, rage, SPine, Zy88 |
|            5 |     3960 | 2024-07-29 | CatEvil           | L   | 0.178      | -            | -                | -                | -         |    -3.77 | FIOURN, Miami, rage, SPine, Zy88 |
|            4 |     3968 | 2024-07-29 | ex-GR             | W   | 0.178      | 0.143        | 0.025 (0.001)    | 0.145 (0.004)    | 0 (0.000) |     3.23 | FIOURN, Miami, rage, SPine, Zy88 |
|            3 |     3998 | 2024-07-28 | NKT               | W   | 0.172      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.93 | FIOURN, Miami, rage, SPine, Zy88 |
|            2 |     4019 | 2024-07-27 | NomadS            | L   | 0.164      | -            | -                | -                | -         |    -3.81 | FIOURN, Miami, rage, SPine, Zy88 |
|            1 |     4044 | 2024-07-26 | The Huns          | W   | 0.158      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.85 | FIOURN, Miami, rage, SPine, Zy88 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,472.53)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
