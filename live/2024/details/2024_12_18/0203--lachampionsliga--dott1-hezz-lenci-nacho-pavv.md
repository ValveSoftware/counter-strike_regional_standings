### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: dott1, Hezz, lenci, nacho, pavv<br />
Global Rank: [203](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_18.md)<br />
Regional Rank: [62]( ../../standings_americas_2024_12_18.md)<br />
<br />
Final Rank Value:  589.1<br />
<br />
Final Rank Value (589.1) = Starting Rank Value (644.7) + Head To Head Adjustments (-55.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 644.7
- 400 + ( ( 0.128 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 644.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       17 | 2024-12-16 | 2070              | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.207 (0.030)    | 0 (0.000) |    18.78 | dott1, Hezz, lenci, nacho, pavv |
|           13 |      503 | 2024-11-22 | BESTIA Academy    | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.55 | dott1, Hezz, lenci, pavv, rzk   |
|           12 |      554 | 2024-11-20 | JOGA DE TERNO     | L   | 1.000      | -            | -                | -                | -         |   -15.10 | dott1, Hezz, lenci, pavv, rzk   |
|           11 |      576 | 2024-11-18 | ShindeN           | L   | 1.000      | -            | -                | -                | -         |    -9.30 | dott1, Hezz, lenci, pavv, rzk   |
|           10 |      924 | 2024-11-03 | 9z Academy        | L   | 0.901      | -            | -                | -                | -         |   -17.52 | dott1, Hezz, lenci, pavv, rzk   |
|            9 |      980 | 2024-11-01 | BeBold            | W   | 0.886      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.24 | dott1, Hezz, lenci, pavv, rzk   |
|            8 |     1023 | 2024-10-30 | Yawara            | L   | 0.873      | -            | -                | -                | -         |   -12.33 | dott1, Hezz, lenci, pavv, rzk   |
|            7 |     1042 | 2024-10-29 | VELOX             | L   | 0.867      | -            | -                | -                | -         |   -16.80 | dott1, Hezz, lenci, pavv, rzk   |
|            6 |     1372 | 2024-10-11 | ShindeN           | L   | 0.749      | -            | -                | -                | -         |    -8.66 | dott1, Hezz, lenci, pavv, rzk   |
|            5 |     3424 | 2024-08-10 | Hawks             | L   | 0.335      | -            | -                | -                | -         |    -5.39 | castrz, dott1, Hezz, pavv, rzk  |
|            4 |     3725 | 2024-08-01 | BESTIA            | L   | 0.275      | -            | -                | -                | -         |    -0.90 | castrz, dott1, Hezz, pavv, rzk  |
|            3 |     3982 | 2024-07-25 | ODDIK             | L   | 0.228      | -            | -                | -                | -         |    -0.97 | castrz, dott1, Hezz, pavv, rzk  |
|            2 |     4054 | 2024-07-23 | RED Canids        | L   | 0.215      | -            | -                | -                | -         |    -0.42 | castrz, dott1, Hezz, pavv, rzk  |
|            1 |     4578 | 2024-06-28 | Sharks Youngsters | L   | 0.048      | -            | -                | -                | -         |    -0.82 | castrz, dott1, Hezz, pavv, rzk  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,865.63)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-11 |      0.749 | $3,600.00      | $2,698.13       |
| 2024-08-10 |      0.335 | $500.00        | $167.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
