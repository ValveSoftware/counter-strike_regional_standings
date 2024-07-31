### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: ANSG1, kiR, kroK, sSen, suma<br />
Global Rank: [148](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [99]( ../standings_europe.md)<br />
<br />
Final Rank Value:  716.9<br />
<br />
Final Rank Value (716.9) = Starting Rank Value (798.6) + Head To Head Adjustments (-81.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.216[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 798.6
- 400 + ( ( 0.193 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 798.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      127 | 2024-07-28 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -10.46 | ANSG1, kiR, kroK, sSen, suma       |
|           21 |      182 | 2024-07-26 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -3.41 | ANSG1, kiR, kroK, sSen, suma       |
|           20 |      238 | 2024-07-24 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |    -8.54 | ANSG1, kiR, kroK, sSen, suma       |
|           19 |      312 | 2024-07-22 | GenOne            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.077 (0.011)    | 0 (0.000) |     7.61 | ANSG1, kiR, kroK, sSen, suma       |
|           18 |      466 | 2024-07-18 | GL Academy        | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.102 (0.015)    | 0 (0.000) |    16.45 | ANSG1, kiR, kroK, sSen, suma       |
|           17 |      516 | 2024-07-17 | 9INE              | L   | 1.000      | -            | -                | -                | -         |    -7.60 | ANSG1, kiR, kroK, sSen, suma       |
|           16 |      930 | 2024-06-14 | Revenant          | L   | 0.885      | -            | -                | -                | -         |   -11.18 | alexsomfan, ANSG1, kiR, sSen, suma |
|           15 |      950 | 2024-06-13 | Aurora Young Blud | L   | 0.880      | -            | -                | -                | -         |    -9.76 | alexsomfan, ANSG1, kiR, sSen, suma |
|           14 |      989 | 2024-06-12 | Sashi             | L   | 0.872      | -            | -                | -                | -         |    -1.90 | ANSG1, kiR, kroK, sSen, suma       |
|           13 |     1008 | 2024-06-11 | Sampi             | L   | 0.865      | -            | -                | -                | -         |    -9.10 | ANSG1, kiR, kroK, sSen, suma       |
|           12 |     1163 | 2024-06-08 | M1X KS            | L   | 0.844      | -            | -                | -                | -         |    -9.61 | ANSG1, kiR, kroK, sSen, suma       |
|           11 |     1203 | 2024-06-07 | Nexus             | L   | 0.839      | -            | -                | -                | -         |   -13.68 | ANSG1, kiR, kroK, sSen, suma       |
|           10 |     1218 | 2024-06-07 | 618 KS            | W   | 0.837      | 0.337        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.837) |     2.84 | ANSG1, kiR, kroK, sSen, suma       |
|            9 |     1263 | 2024-06-06 | Gaimin Gladiators | L   | 0.832      | -            | -                | -                | -         |    -5.86 | ANSG1, kiR, kroK, sSen, suma       |
|            8 |     2495 | 2024-04-21 | MASONIC           | L   | 0.525      | -            | -                | -                | -         |    -8.32 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            7 |     2500 | 2024-04-21 | Preasy            | W   | 0.524      | 0.318        | 0.012 (0.002)    | 0.222 (0.037)    | 1 (0.524) |     8.52 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            6 |     2516 | 2024-04-20 | Kronjyllands      | W   | 0.520      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.520) |     1.74 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            5 |     2716 | 2024-04-15 | ECLOT             | L   | 0.484      | -            | -                | -                | -         |    -2.33 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            4 |     2890 | 2024-04-09 | Alliance          | L   | 0.444      | -            | -                | -                | -         |    -5.72 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            3 |     3216 | 2024-03-25 | Sashi             | L   | 0.347      | -            | -                | -                | -         |    -7.06 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            2 |     3219 | 2024-03-25 | XI                | W   | 0.346      | 0.342        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.92 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            1 |     3555 | 2024-03-09 | NOM               | L   | 0.238      | -            | -                | -                | -         |    -6.31 | ANSG1, JBOEN, kiR, kroK, tOPZ      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,978.96)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      0.880 | $545.00        | $479.68         |
| 2024-06-12 |      0.873 | $360.00        | $314.17         |
| 2024-06-08 |      0.846 | $1,087.00      | $919.84         |
| 2024-04-21 |      0.525 | $1,426.00      | $748.23         |
| 2024-03-25 |      0.347 | $1,490.00      | $517.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
