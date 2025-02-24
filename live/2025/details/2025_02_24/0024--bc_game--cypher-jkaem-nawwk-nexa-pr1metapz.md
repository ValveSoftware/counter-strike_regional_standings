### Roster Details<br />
Team Name: BC.Game<br />
Roster: CYPHER, jkaem, nawwk, nexa, pr1metapz<br />
Global Rank: [24](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [18]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  1105.5<br />
<br />
Final Rank Value (1105.5) = Starting Rank Value (1005.0) + Head To Head Adjustments (100.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.471[<sup>1</sup>](#table2)
- Bounty Collected: 0.414[<sup>2</sup>](#table1)
- Opponent Network: 0.270[<sup>2</sup>](#table1)
- LAN Wins: 0.117[<sup>2</sup>](#table1)

The average of these factors is 0.318<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1005.0
- 400 + ( ( 0.318 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1005.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |        3 | 2025-02-24 | 9INE           | W   | 1.000      | 0.143        | -                | 0.968 (0.138)    | 0 (0.000) |    10.80 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           34 |        6 | 2025-02-23 | Aurora         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.03 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           33 |        9 | 2025-02-23 | B8             | L   | 1.000      | -            | -                | -                | -         |   -13.73 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           32 |       16 | 2025-02-23 | NAVI Junior    | W   | 1.000      | 0.435        | 0.088 (0.038)    | 1.000 (0.435)    | 0 (0.000) |     9.14 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           31 |       38 | 2025-02-22 | OG             | L   | 1.000      | -            | -                | -                | -         |   -23.47 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           30 |       43 | 2025-02-22 | Partizan       | W   | 1.000      | 0.435        | 0.077 (0.033)    | 0.587 (0.255)    | 0 (0.000) |    13.70 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           29 |       76 | 2025-02-21 | EYEBALLERS     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.95 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           28 |       90 | 2025-02-20 | Nexus          | W   | 1.000      | 0.435        | 0.172 (0.075)    | 0.614 (0.267)    | 0 (0.000) |    10.11 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           27 |      100 | 2025-02-18 | CPH Wolves     | W   | 1.000      | 0.435        | -                | 0.705 (0.306)    | 0 (0.000) |     6.62 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           26 |      115 | 2025-02-17 | GUN5           | L   | 1.000      | -            | -                | -                | -         |   -19.43 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           25 |      196 | 2025-02-14 | 500            | W   | 1.000      | 0.435        | 0.084 (0.037)    | 1.000 (0.435)    | -         |    14.60 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           24 |      249 | 2025-02-12 | CYBERSHOKE     | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | -         |     5.09 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           23 |      298 | 2025-02-10 | Astralis       | W   | 1.000      | 0.143        | 0.580 (0.083)    | 1.000 (0.143)    | -         |    30.48 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           22 |      308 | 2025-02-10 | BIG            | W   | 1.000      | 0.143        | 0.228 (0.033)    | -                | -         |    25.11 | CacaNito, CYPHER, nawwk, nexa, pr1metapz |
|           21 |      309 | 2025-02-10 | GTZ            | L   | 1.000      | -            | -                | -                | -         |   -17.39 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           20 |      384 | 2025-02-08 | Zero Tenacity  | W   | 1.000      | -            | -                | -                | -         |     7.09 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           19 |      392 | 2025-02-08 | Partizan       | W   | 1.000      | 0.143        | 0.077 (0.011)    | -                | -         |    16.14 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           18 |      438 | 2025-02-07 | 500            | L   | 1.000      | -            | -                | -                | -         |   -16.57 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           17 |      487 | 2025-02-05 | 500            | W   | 1.000      | 0.143        | 0.084 (0.012)    | 1.000 (0.143)    | -         |    13.68 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           16 |      499 | 2025-02-05 | SAW            | W   | 1.000      | 0.143        | 0.244 (0.035)    | -                | -         |    24.68 | CYPHER, jkaem, nawwk, nexa, pr1metapz    |
|           15 |     1983 | 2024-10-19 | Nemiga         | L   | 0.346      | -            | -                | -                | -         |    -4.92 | CYPHER, h4rn, jkaem, nexa, VLDN          |
|           14 |     1993 | 2024-10-19 | HEROIC         | W   | 0.345      | 0.624        | 0.125 (0.027)    | -                | 1 (0.345) |     6.19 | CYPHER, h4rn, jkaem, nexa, VLDN          |
|           13 |     2021 | 2024-10-18 | PARIVISION     | W   | 0.339      | -            | -                | -                | 1 (0.339) |     1.95 | CYPHER, h4rn, jkaem, nexa, VLDN          |
|           12 |     2047 | 2024-10-17 | Solid          | W   | 0.331      | 0.624        | -                | 0.682 (0.141)    | 1 (0.331) |     2.93 | CYPHER, h4rn, jkaem, nexa, VLDN          |
|           11 |     2074 | 2024-10-16 | fnatic         | L   | 0.326      | -            | -                | -                | -         |    -4.60 | CYPHER, h4rn, jkaem, nexa, VLDN          |
|           10 |     2948 | 2024-09-19 | devils.one     | L   | 0.146      | -            | -                | -                | -         |    -4.05 | CYPHER, jkaem, nawwk, Patti, VLDN        |
|            9 |     3000 | 2024-09-18 | Sashi          | L   | 0.137      | -            | -                | -                | -         |    -2.58 | CYPHER, jkaem, nawwk, nexa, VLDN         |
|            8 |     3016 | 2024-09-17 | Sashi          | W   | 0.132      | -            | -                | -                | -         |     1.69 | CYPHER, jkaem, nawwk, nexa, VLDN         |
|            7 |     3022 | 2024-09-17 | GUN5           | W   | 0.131      | -            | -                | -                | -         |     1.73 | CYPHER, jkaem, nawwk, nexa, VLDN         |
|            6 |     3030 | 2024-09-17 | Sashi          | L   | 0.130      | -            | -                | -                | -         |    -2.44 | CYPHER, jkaem, nawwk, nexa, VLDN         |
|            5 |     3090 | 2024-09-14 | Insilio        | L   | 0.113      | -            | -                | -                | -         |    -3.02 | CYPHER, jkaem, nawwk, nexa, VLDN         |
|            4 |     3137 | 2024-09-13 | Spirit Academy | W   | 0.105      | -            | -                | -                | -         |     1.19 | CYPHER, jkaem, nawwk, nexa, VLDN         |
|            3 |     3245 | 2024-09-10 | Passion UA     | W   | 0.083      | -            | -                | -                | -         |     1.27 | CYPHER, jkaem, nawwk, nexa, VLDN         |
|            2 |     3300 | 2024-09-07 | B8             | L   | 0.065      | -            | -                | -                | -         |    -0.77 | CYPHER, jkaem, nawwk, nexa, VLDN         |
|            1 |     3336 | 2024-09-06 | Insilio        | W   | 0.058      | -            | -                | -                | -         |     0.26 | CYPHER, jkaem, nawwk, nexa, VLDN         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,881.17)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-10-19 |      0.346 | $50,000.00     | $17,320.08      |
| 2024-09-24 |      0.178 | $1,000.00      | $177.92         |
| 2024-09-15 |      0.119 | $2,000.00      | $238.39         |
| 2024-09-08 |      0.072 | $2,000.00      | $144.79         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
