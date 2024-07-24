### Roster Details<br />
Team Name: ex-Sprout<br />
Roster: cej0t, podi, raalz, reiko, Sdaim<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [191](../standings_global.md)<br />
Regional Rank: [122]( ../standings_europe.md)<br />
Final Rank Value:  528.7<br />
<br />
Final Rank Value (528.7) = Starting Rank Value (525.9) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.9
- 400 + ( ( 0.062 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 525.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2902 | 2024-03-28 | Rebels          | L   | 0.414      | -            | -                | -                | -         |    -0.77 | cej0t, podi, raalz, reiko, Sdaim     |
|           15 |     2976 | 2024-03-25 | ALTERNATE aTTaX | L   | 0.394      | -            | -                | -                | -         |    -0.84 | cej0t, podi, raalz, reiko, Sdaim     |
|           14 |     3006 | 2024-03-22 | Aurora          | L   | 0.373      | -            | -                | -                | -         |    -0.03 | cej0t, podi, raalz, reiko, Sdaim     |
|           13 |     3077 | 2024-03-19 | B8              | L   | 0.352      | -            | -                | -                | -         |    -0.44 | cej0t, podi, raalz, reiko, Sdaim     |
|           12 |     3362 | 2024-03-07 | Alliance        | L   | 0.272      | -            | -                | -                | -         |    -1.13 | cej0t, raalz, reiko, Sdaim, sL1m3    |
|           11 |     3427 | 2024-03-05 | KOI             | L   | 0.260      | -            | -                | -                | -         |    -0.31 | cej0t, raalz, reiko, Sdaim, sL1m3    |
|           10 |     3470 | 2024-03-03 | BetBoom         | L   | 0.246      | -            | -                | -                | -         |    -0.03 | Buzz, cej0t, raalz, reiko, sL1m3     |
|            9 |     3938 | 2024-02-11 | Metizport       | L   | 0.106      | -            | -                | -                | -         |    -0.33 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            8 |     3964 | 2024-02-09 | fnatic          | W   | 0.093      | 0.143        | 0.428 (0.006)    | 0.666 (0.009)    | 0 (0.000) |     2.91 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            7 |     3965 | 2024-02-09 | 3DMAX           | W   | 0.092      | 0.143        | 0.175 (0.002)    | 1.000 (0.013)    | 0 (0.000) |     2.85 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            6 |     3985 | 2024-02-07 | Metizport       | L   | 0.079      | -            | -                | -                | -         |    -0.24 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            5 |     4136 | 2024-01-31 | ex-Preasy       | L   | 0.032      | -            | -                | -                | -         |    -0.17 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            4 |     4147 | 2024-01-30 | Nemiga          | L   | 0.027      | -            | -                | -                | -         |    -0.02 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            3 |     4155 | 2024-01-30 | ECLOT           | W   | 0.026      | 0.143        | 0.084 (0.000)    | 0.510 (0.002)    | 0 (0.000) |     0.81 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            2 |     4158 | 2024-01-30 | ALTERNATE aTTaX | L   | 0.025      | -            | -                | -                | -         |    -0.05 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            1 |     4163 | 2024-01-29 | Imperial fe     | W   | 0.018      | 0.143        | 0.165 (0.000)    | 0.308 (0.001)    | 0 (0.000) |     0.55 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |

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
