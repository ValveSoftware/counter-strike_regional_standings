### Roster Details<br />
Team Name: The Art of War<br />
Roster: BaN4na, neo, Oath, Terryyy, viridian<br />
Global Rank: [174](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_13.md)<br />
Regional Rank: [15]( ../../standings_asia_2025_01_13.md)<br />
<br />
Final Rank Value:  666.9<br />
<br />
Final Rank Value (666.9) = Starting Rank Value (654.7) + Head To Head Adjustments (12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.7
- 400 + ( ( 0.128 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 654.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |     1393 | 2024-10-18 | Housebets        | L   | 0.619      | -            | -                | -                | -         |   -10.78 | BaN4na, neo, Oath, Terryyy, viridian     |
|           36 |     1421 | 2024-10-17 | Mindfreak        | L   | 0.612      | -            | -                | -                | -         |    -8.88 | BaN4na, neo, Oath, Terryyy, viridian     |
|           35 |     1567 | 2024-10-09 | MANTRA           | W   | 0.559      | 0.333        | 0.001 (0.000)    | 0.060 (0.011)    | 0 (0.000) |     6.97 | BaN4na, neo, Oath, Terryyy, viridian     |
|           34 |     1570 | 2024-10-09 | MANTRA           | W   | 0.558      | 0.333        | 0.001 (0.000)    | 0.060 (0.011)    | 0 (0.000) |     7.31 | BaN4na, neo, Oath, Terryyy, viridian     |
|           33 |     1665 | 2024-10-06 | SemperFi         | L   | 0.538      | -            | -                | -                | -         |   -12.09 | BaN4na, neo, Oath, Terryyy, viridian     |
|           32 |     1666 | 2024-10-05 | Mindfreak        | W   | 0.537      | 0.143        | 0.005 (0.000)    | 0.164 (0.013)    | 0 (0.000) |     9.37 | BaN4na, neo, Oath, Terryyy, viridian     |
|           31 |     1668 | 2024-10-05 | Vantage          | W   | 0.536      | -            | -                | -                | 0 (0.000) |     4.79 | BaN4na, neo, Oath, Terryyy, viridian     |
|           30 |     1696 | 2024-10-05 | Housebets        | W   | 0.532      | 0.143        | 0.004 (0.000)    | 0.080 (0.006)    | 0 (0.000) |     7.53 | BaN4na, neo, Oath, Terryyy, viridian     |
|           29 |     1803 | 2024-10-02 | DXA              | L   | 0.512      | -            | -                | -                | -         |    -9.15 | BaN4na, neo, Oath, Terryyy, viridian     |
|           28 |     1807 | 2024-10-02 | DXA              | W   | 0.512      | 0.333        | 0.001 (0.000)    | 0.094 (0.016)    | 0 (0.000) |     7.10 | BaN4na, neo, Oath, Terryyy, viridian     |
|           27 |     1987 | 2024-09-27 | FlyQuest         | L   | 0.479      | -            | -                | -                | -         |    -0.41 | BaN4na, neo, Oath, Terryyy, viridian     |
|           26 |     1990 | 2024-09-27 | FlyQuest         | L   | 0.478      | -            | -                | -                | -         |    -0.41 | BaN4na, neo, Oath, Terryyy, viridian     |
|           25 |     2088 | 2024-09-25 | Mindfreak        | L   | 0.465      | -            | -                | -                | -         |    -6.57 | BaN4na, neo, Oath, Terryyy, viridian     |
|           24 |     2092 | 2024-09-25 | Mindfreak        | W   | 0.465      | 0.333        | 0.005 (0.001)    | 0.164 (0.025)    | 0 (0.000) |     8.28 | BaN4na, neo, Oath, Terryyy, viridian     |
|           23 |     2397 | 2024-09-15 | KZG              | W   | 0.399      | 0.333        | 0.002 (0.000)    | 0.090 (0.012)    | 0 (0.000) |     6.08 | BaN4na, neo, Oath, Terryyy, viridian     |
|           22 |     2400 | 2024-09-15 | KZG              | L   | 0.399      | -            | -                | -                | -         |    -6.63 | BaN4na, neo, Oath, Terryyy, viridian     |
|           21 |     2527 | 2024-09-11 | Vantage          | W   | 0.372      | 0.333        | -                | 0.055 (0.007)    | 0 (0.000) |     3.48 | BaN4na, neo, Oath, Terryyy, viridian     |
|           20 |     2530 | 2024-09-11 | Vantage          | W   | 0.372      | -            | -                | -                | 0 (0.000) |     2.22 | BaN4na, neo, Oath, Terryyy, viridian     |
|           19 |     2958 | 2024-08-28 | Arcade           | L   | 0.278      | -            | -                | -                | -         |    -4.89 | BaN4na, neo, Oath, Terryyy, viridian     |
|           18 |     3001 | 2024-08-27 | Rooster          | L   | 0.272      | -            | -                | -                | -         |    -4.01 | BaN4na, neo, Oath, Terryyy, viridian     |
|           17 |     3007 | 2024-08-27 | KZG              | W   | 0.271      | -            | -                | -                | -         |     4.12 | BaN4na, neo, Oath, Terryyy, viridian     |
|           16 |     3132 | 2024-08-24 | Arcade           | W   | 0.252      | -            | -                | -                | -         |     3.54 | BaN4na, neo, Oath, Terryyy, viridian     |
|           15 |     3135 | 2024-08-24 | TALON            | W   | 0.252      | 0.143        | -                | 0.148 (0.005)    | -         |     3.36 | BaN4na, neo, Oath, Terryyy, viridian     |
|           14 |     3139 | 2024-08-24 | Shanghai Sharks  | W   | 0.251      | -            | -                | -                | -         |     1.53 | BaN4na, neo, Oath, Terryyy, viridian     |
|           13 |     3184 | 2024-08-22 | Rooster          | L   | 0.240      | -            | -                | -                | -         |    -3.51 | BaN4na, neo, Oath, Terryyy, viridian     |
|           12 |     3246 | 2024-08-21 | Mindfreak        | W   | 0.233      | 0.143        | 0.005 (0.000)    | 0.164 (0.005)    | -         |     4.43 | BaN4na, neo, Oath, Terryyy, viridian     |
|           11 |     3276 | 2024-08-21 | Housebets        | W   | 0.232      | -            | -                | -                | -         |     3.79 | BaN4na, neo, Oath, Terryyy, viridian     |
|           10 |     3493 | 2024-08-13 | Housebets        | L   | 0.179      | -            | -                | -                | -         |    -2.74 | BaN4na, neo, Oath, Terryyy, viridian     |
|            9 |     3495 | 2024-08-13 | Housebets        | L   | 0.179      | -            | -                | -                | -         |    -2.78 | BaN4na, neo, Oath, Terryyy, viridian     |
|            8 |     3585 | 2024-08-10 | Arcade           | L   | 0.158      | -            | -                | -                | -         |    -2.73 | BaN4na, neo, Oath, Terryyy, viridian     |
|            7 |     3587 | 2024-08-09 | Let's go golfing | L   | 0.157      | -            | -                | -                | -         |    -2.69 | BaN4na, neo, Oath, Terryyy, viridian     |
|            6 |     3687 | 2024-08-07 | Arcade           | W   | 0.139      | -            | -                | -                | -         |     1.99 | BaN4na, neo, Oath, Terryyy, viridian     |
|            5 |     3693 | 2024-08-07 | Arcade           | W   | 0.138      | -            | -                | -                | -         |     2.01 | BaN4na, neo, Oath, Terryyy, viridian     |
|            4 |     3949 | 2024-07-31 | Above The Rest   | W   | 0.092      | -            | -                | -                | -         |     0.78 | BaN4na, neo, Oath, Terryyy, viridian     |
|            3 |     3996 | 2024-07-30 | Vantage          | W   | 0.085      | -            | -                | -                | -         |     0.52 | BaN4na, neo, Oath, Terryyy, viridian     |
|            2 |     4211 | 2024-07-23 | Rooster          | W   | 0.039      | 0.333        | 0.013 (0.000)    | -                | -         |     0.66 | BaN4na, bebest, neo, sunshinez, viridian |
|            1 |     4217 | 2024-07-23 | Rooster          | W   | 0.039      | 0.333        | 0.013 (0.000)    | -                | -         |     0.66 | BaN4na, bebest, neo, sunshinez, viridian |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($683.70)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.631 | $1,050.00      | $662.79         |
| 2024-08-10 |      0.160 | $131.00        | $20.91          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
