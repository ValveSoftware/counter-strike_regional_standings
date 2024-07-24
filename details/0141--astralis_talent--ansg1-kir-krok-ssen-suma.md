### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: ANSG1, kiR, kroK, sSen, suma<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [141](../standings_global.md)<br />
Regional Rank: [92]( ../standings_europe.md)<br />
Final Rank Value:  744.4<br />
<br />
Final Rank Value (744.4) = Starting Rank Value (812.4) + Head To Head Adjustments (-68.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.341[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.239[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 812.4
- 400 + ( ( 0.204 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 812.4


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
|           19 |       70 | 2024-07-22 | GenOne            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.081 (0.012)    | 0 (0.000) |     7.44 | ANSG1, kiR, kroK, sSen, suma       |
|           18 |      224 | 2024-07-18 | GL Academy        | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.118 (0.017)    | 0 (0.000) |    16.68 | ANSG1, kiR, kroK, sSen, suma       |
|           17 |      274 | 2024-07-17 | 9INE              | L   | 1.000      | -            | -                | -                | -         |    -9.19 | ANSG1, kiR, kroK, sSen, suma       |
|           16 |      688 | 2024-06-14 | Revenant          | L   | 0.932      | -            | -                | -                | -         |   -11.78 | alexsomfan, ANSG1, kiR, sSen, suma |
|           15 |      708 | 2024-06-13 | Aurora Young Blud | L   | 0.927      | -            | -                | -                | -         |   -11.34 | alexsomfan, ANSG1, kiR, sSen, suma |
|           14 |      747 | 2024-06-12 | Sashi             | L   | 0.919      | -            | -                | -                | -         |    -2.10 | ANSG1, kiR, kroK, sSen, suma       |
|           13 |      766 | 2024-06-11 | Sampi             | L   | 0.913      | -            | -                | -                | -         |    -9.88 | ANSG1, kiR, kroK, sSen, suma       |
|           12 |      921 | 2024-06-08 | M1X KS            | L   | 0.891      | -            | -                | -                | -         |    -9.97 | ANSG1, kiR, kroK, sSen, suma       |
|           11 |      961 | 2024-06-07 | Nexus             | L   | 0.886      | -            | -                | -                | -         |   -14.85 | ANSG1, kiR, kroK, sSen, suma       |
|           10 |      976 | 2024-06-07 | 618 KS            | W   | 0.884      | 0.337        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.884) |     2.83 | ANSG1, kiR, kroK, sSen, suma       |
|            9 |     1021 | 2024-06-06 | Gaimin Gladiators | L   | 0.880      | -            | -                | -                | -         |    -5.78 | ANSG1, kiR, kroK, sSen, suma       |
|            8 |     2253 | 2024-04-21 | MASONIC           | L   | 0.572      | -            | -                | -                | -         |    -8.98 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            7 |     2258 | 2024-04-21 | Preasy            | W   | 0.571      | 0.318        | 0.015 (0.003)    | 0.243 (0.044)    | 1 (0.571) |     9.29 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            6 |     2274 | 2024-04-20 | Kronjyllands      | W   | 0.567      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.567) |     1.80 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            5 |     2474 | 2024-04-15 | ECLOT             | L   | 0.531      | -            | -                | -                | -         |    -2.37 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            4 |     2648 | 2024-04-09 | Alliance          | L   | 0.491      | -            | -                | -                | -         |    -6.28 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            3 |     2974 | 2024-03-25 | Sashi             | L   | 0.394      | -            | -                | -                | -         |    -8.11 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            2 |     2977 | 2024-03-25 | XI                | W   | 0.393      | 0.342        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.07 | ANSG1, JBOEN, kiR, kroK, tOPZ      |
|            1 |     3313 | 2024-03-09 | NOM               | L   | 0.285      | -            | -                | -                | -         |    -7.49 | ANSG1, JBOEN, kiR, kroK, tOPZ      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,211.05)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      0.927 | $545.00        | $505.45         |
| 2024-06-12 |      0.920 | $360.00        | $331.19         |
| 2024-06-08 |      0.894 | $1,087.00      | $971.24         |
| 2024-04-21 |      0.572 | $1,426.00      | $815.66         |
| 2024-03-25 |      0.394 | $1,490.00      | $587.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
