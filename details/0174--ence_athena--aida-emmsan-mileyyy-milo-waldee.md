### Roster Details<br />
Team Name: ENCE Athena<br />
Roster: Aida, Emmsan, Mileyyy, miLo, Waldee<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [174](../standings_global.md)<br />
Regional Rank: [108]( ../standings_europe.md)<br />
Final Rank Value:  639.9<br />
<br />
Final Rank Value (639.9) = Starting Rank Value (663.9) + Head To Head Adjustments (-24.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 663.9
- 400 + ( ( 0.125 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 663.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      457 | 2024-06-08 | Crescent fe      | L   | 0.979      | -            | -                | -                | -         |   -13.80 | Aida, Emmsan, Mileyyy, miLo, Waldee |
|           11 |     1676 | 2024-04-27 | NIP Impact       | L   | 0.699      | -            | -                | -                | -         |    -7.88 | Aida, Emmsan, miLo, Waldee, xia     |
|           10 |     1861 | 2024-04-19 | Astralis W       | W   | 0.647      | 0.331        | 0.002 (0.000)    | 0.034 (0.007)    | 0 (0.000) |     9.26 | Aida, Emmsan, miLo, Waldee, xia     |
|            9 |     2241 | 2024-04-07 | dreamcatchers fe | L   | 0.567      | -            | -                | -                | -         |    -8.63 | Aida, Emmsan, miLo, Waldee, xia     |
|            8 |     2265 | 2024-04-06 | Imperial fe      | L   | 0.559      | -            | -                | -                | -         |    -1.14 | Aida, Emmsan, miLo, Waldee, xia     |
|            7 |     2314 | 2024-04-04 | BIG EQUIPA       | L   | 0.547      | -            | -                | -                | -         |    -5.11 | Aida, Emmsan, miLo, Waldee, xia     |
|            6 |     2485 | 2024-03-27 | Imperial fe      | L   | 0.494      | -            | -                | -                | -         |    -1.05 | Aida, Emmsan, miLo, Waldee, xia     |
|            5 |     2602 | 2024-03-20 | NIP Impact       | L   | 0.447      | -            | -                | -                | -         |    -5.91 | Aida, Emmsan, miLo, Waldee, xia     |
|            4 |     2754 | 2024-03-13 | ex-GUILD fe      | W   | 0.401      | 0.331        | 0.004 (0.001)    | 0.099 (0.013)    | 0 (0.000) |     6.63 | Aida, Emmsan, miLo, Waldee, xia     |
|            3 |     3152 | 2024-02-25 | NAVI Javelins    | L   | 0.285      | -            | -                | -                | -         |    -2.10 | Aida, Emmsan, miLo, Waldee, xia     |
|            2 |     3182 | 2024-02-24 | Spirit fe        | W   | 0.279      | 0.238        | 0.004 (0.000)    | 0.043 (0.003)    | 0 (0.000) |     4.41 | Aida, Emmsan, miLo, Waldee, xia     |
|            1 |     3424 | 2024-02-14 | more whiskey     | W   | 0.214      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.25 | Aida, Emmsan, miLo, Waldee, xia     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,008.24)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      0.981 | $100.00        | $98.07          |
| 2024-04-27 |      0.699 | $107.00        | $74.84          |
| 2024-04-21 |      0.660 | $1,050.00      | $693.51         |
| 2024-04-07 |      0.567 | $250.00        | $141.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
