### Roster Details<br />
Team Name: Entropiq<br />
Roster: c0llins, Marix, mwlky, oxygeN, tiziaN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [183](../standings_global.md)<br />
Regional Rank: [116]( ../standings_europe.md)<br />
Final Rank Value:  587.7<br />
<br />
Final Rank Value (587.7) = Starting Rank Value (560.9) + Head To Head Adjustments (26.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.079<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 560.9
- 400 + ( ( 0.079 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 560.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     3147 | 2024-03-15 | MOUZ NXT        | L   | 0.326      | -            | -                | -                | -         |    -0.71 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           17 |     3184 | 2024-03-14 | ex-Preasy       | L   | 0.318      | -            | -                | -                | -         |    -1.91 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           16 |     3273 | 2024-03-11 | ECLOT           | W   | 0.298      | 0.371        | 0.084 (0.009)    | 0.510 (0.056)    | 0 (0.000) |     8.99 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           15 |     3290 | 2024-03-10 | ALTERNATE aTTaX | W   | 0.292      | 0.371        | 0.041 (0.004)    | 0.638 (0.069)    | 0 (0.000) |     8.45 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           14 |     3319 | 2024-03-09 | Alliance        | L   | 0.285      | -            | -                | -                | -         |    -1.45 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           13 |     3334 | 2024-03-08 | Passion UA      | L   | 0.279      | -            | -                | -                | -         |    -0.48 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           12 |     3435 | 2024-03-05 | 500             | L   | 0.258      | -            | -                | -                | -         |    -2.43 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           11 |     3452 | 2024-03-04 | Sashi           | W   | 0.251      | 0.371        | 0.234 (0.022)    | 1.000 (0.093)    | 0 (0.000) |     7.62 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           10 |     3581 | 2024-02-26 | 9INE            | W   | 0.206      | 0.143        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     2.69 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            9 |     3602 | 2024-02-25 | Secret          | W   | 0.199      | 0.358        | 0.000 (0.000)    | 0.074 (0.005)    | 0 (0.000) |     2.99 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            8 |     3652 | 2024-02-23 | Sampi           | L   | 0.184      | -            | -                | -                | -         |    -0.74 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            7 |     3697 | 2024-02-21 | MOUZ NXT        | L   | 0.171      | -            | -                | -                | -         |    -0.32 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            6 |     3784 | 2024-02-17 | The Chosen Few  | W   | 0.148      | 0.358        | 0.001 (0.000)    | 0.068 (0.004)    | 0 (0.000) |     3.06 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            5 |     3934 | 2024-02-11 | ALTERNATE aTTaX | L   | 0.107      | -            | -                | -                | -         |    -0.24 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            4 |     4007 | 2024-02-05 | Sashi           | L   | 0.065      | -            | -                | -                | -         |    -0.07 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            3 |     4050 | 2024-02-03 | Sangal          | W   | 0.053      | 0.358        | 0.195 (0.004)    | 0.860 (0.016)    | 0 (0.000) |     1.59 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            2 |     4157 | 2024-01-30 | Endpoint        | L   | 0.026      | -            | -                | -                | -         |    -0.11 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            1 |     4160 | 2024-01-30 | ex-Preasy       | L   | 0.024      | -            | -                | -                | -         |    -0.15 | c0llins, Marix, mwlky, oxygeN, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
