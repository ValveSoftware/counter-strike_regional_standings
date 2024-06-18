### Roster Details<br />
Team Name: Case<br />
Roster: RCF, snow, souz4h, yepz, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [172](../standings_global.md)<br />
Regional Rank: [47]( ../standings_americas.md)<br />
Final Rank Value:  649.3<br />
<br />
Final Rank Value (649.3) = Starting Rank Value (637.4) + Head To Head Adjustments (11.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.197[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 637.4
- 400 + ( ( 0.117 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 637.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     3715 | 2024-01-21 | paiN        | L   | 0.211      | -            | -                | -                | -         |    -0.03 | RCF, snow, souz4h, yepz, zmb |
|           16 |     3722 | 2024-01-21 | Fluxo       | W   | 0.210      | 0.143        | 0.159 (0.005)    | 0.627 (0.019)    | 0 (0.000) |     6.00 | RCF, snow, souz4h, yepz, zmb |
|           15 |     3748 | 2024-01-20 | adalYamigos | W   | 0.205      | 0.143        | 0.000 (0.000)    | 0.173 (0.005)    | 0 (0.000) |     3.20 | RCF, snow, souz4h, yepz, zmb |
|           14 |     3796 | 2024-01-19 | W7M         | L   | 0.198      | -            | -                | -                | -         |    -1.89 | RCF, snow, souz4h, yepz, zmb |
|           13 |     3817 | 2024-01-19 | RED Canids  | L   | 0.196      | -            | -                | -                | -         |    -0.32 | RCF, snow, souz4h, yepz, zmb |
|           12 |     3970 | 2024-01-16 | RED Canids  | L   | 0.177      | -            | -                | -                | -         |    -0.28 | RCF, snow, souz4h, yepz, zmb |
|           11 |     3972 | 2024-01-16 | paiN        | W   | 0.177      | 0.143        | 0.492 (0.012)    | 0.775 (0.020)    | 0 (0.000) |     5.54 | RCF, snow, souz4h, yepz, zmb |
|           10 |     3989 | 2024-01-16 | Hype        | W   | 0.176      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.16 | RCF, snow, souz4h, yepz, zmb |
|            9 |     4065 | 2024-01-13 | W7M         | L   | 0.157      | -            | -                | -                | -         |    -1.48 | RCF, snow, souz4h, yepz, zmb |
|            8 |     4143 | 2024-01-11 | Galorys     | L   | 0.144      | -            | -                | -                | -         |    -0.92 | RCF, snow, souz4h, yepz, zmb |
|            7 |     4150 | 2024-01-11 | AJF         | W   | 0.143      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.95 | RCF, snow, souz4h, yepz, zmb |
|            6 |     4154 | 2024-01-11 | Hype        | W   | 0.143      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.94 | RCF, snow, souz4h, yepz, zmb |
|            5 |     4209 | 2024-01-09 | Flamengo    | L   | 0.130      | -            | -                | -                | -         |    -2.71 | RCF, snow, souz4h, yepz, zmb |
|            4 |     4221 | 2024-01-09 | Yawara      | W   | 0.129      | 0.143        | 0.000 (0.000)    | 0.020 (0.000)    | 0 (0.000) |     1.34 | RCF, snow, souz4h, yepz, zmb |
|            3 |     4271 | 2023-12-23 | ODDIK       | L   | 0.017      | -            | -                | -                | -         |    -0.07 | RCF, snow, souz4h, yepz, zmb |
|            2 |     4272 | 2023-12-23 | Solid       | W   | 0.016      | 0.303        | 0.051 (0.000)    | 0.566 (0.003)    | 0 (0.000) |     0.41 | RCF, snow, souz4h, yepz, zmb |
|            1 |     4276 | 2023-12-21 | Flamengo    | W   | 0.003      | 0.303        | 0.000 (0.000)    | 0.033 (0.000)    | 0 (0.000) |     0.03 | RCF, snow, souz4h, yepz, zmb |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24.77)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
