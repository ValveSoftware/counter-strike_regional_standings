### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: ANSG1, JBOEN, kiR, kroK, tOPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [127](../standings_global.md)<br />
Regional Rank: [84]( ../standings_europe.md)<br />
Final Rank Value:  780.9<br />
<br />
Final Rank Value (780.9) = Starting Rank Value (797.8) + Head To Head Adjustments (-16.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.169[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 797.8
- 400 + ( ( 0.196 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 797.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     1667 | 2024-04-21 | MASONIC       | L   | 0.815      | -            | -                | -                | -         |   -10.94 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           12 |     1672 | 2024-04-21 | Preasy        | W   | 0.814      | 0.318        | 0.012 (0.003)    | 0.169 (0.044)    | 1 (0.814) |    13.36 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           11 |     1688 | 2024-04-20 | Kronjyllands  | W   | 0.809      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.809) |     2.74 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           10 |     1888 | 2024-04-15 | ECLOT         | L   | 0.774      | -            | -                | -                | -         |    -2.71 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            9 |     2062 | 2024-04-09 | Alliance      | L   | 0.734      | -            | -                | -                | -         |    -7.74 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            8 |     2389 | 2024-03-25 | Sashi         | L   | 0.637      | -            | -                | -                | -         |   -12.27 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            7 |     2392 | 2024-03-25 | XI            | W   | 0.636      | 0.342        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.53 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            6 |     2728 | 2024-03-09 | NOM           | L   | 0.528      | -            | -                | -                | -         |   -13.63 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            5 |     3738 | 2024-01-21 | MOUZ NXT      | L   | 0.207      | -            | -                | -                | -         |    -1.01 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            4 |     3779 | 2024-01-20 | Permitta      | W   | 0.201      | 0.333        | 0.039 (0.003)    | 0.885 (0.059)    | 0 (0.000) |     4.40 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            3 |     3829 | 2024-01-19 | MOUZ NXT      | L   | 0.194      | -            | -                | -                | -         |    -0.94 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            2 |     3937 | 2024-01-17 | Permitta      | W   | 0.181      | 0.333        | 0.039 (0.002)    | 0.885 (0.053)    | 0 (0.000) |     4.02 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            1 |     4054 | 2024-01-14 | Zero Tenacity | W   | 0.161      | 0.333        | 0.153 (0.008)    | 1.000 (0.054)    | 0 (0.000) |     4.31 | ANSG1, JBOEN, kiR, kroK, tOPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,730.83)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.815 | $1,426.00      | $1,161.48       |
| 2024-03-25 |      0.637 | $1,490.00      | $948.85         |
| 2024-01-21 |      0.207 | $3,000.00      | $620.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
