### Roster Details<br />
Team Name: Akimbo<br />
Roster: alula, Drew, Halen, taggy, Weeza<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [162](../standings_global.md)<br />
Regional Rank: [45]( ../standings_americas.md)<br />
Final Rank Value:  688.7<br />
<br />
Final Rank Value (688.7) = Starting Rank Value (703.7) + Head To Head Adjustments (-15.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.050[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 703.7
- 400 + ( ( 0.144 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 703.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      209 | 2024-06-14 | Legacy        | L   | 1.000      | -            | -                | -                | -         |    -2.80 | alula, Drew, Halen, taggy, Weeza  |
|            9 |      364 | 2024-06-09 | Lore          | W   | 0.988      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.66 | alula, Drew, Halen, taggy, Weeza  |
|            8 |      428 | 2024-06-08 | E-Xolos LAZER | L   | 0.981      | -            | -                | -                | -         |   -13.13 | alula, Drew, Halen, taggy, Weeza  |
|            7 |      611 | 2024-06-05 | Final Form    | W   | 0.961      | 0.371        | 0.005 (0.002)    | 0.081 (0.029)    | 0 (0.000) |    13.73 | alula, Drew, Halen, taggy, Weeza  |
|            6 |      700 | 2024-06-03 | FLUFFY AIMERS | L   | 0.947      | -            | -                | -                | -         |   -11.41 | abp, alula, Halen, rayxts, Weeza  |
|            5 |     2612 | 2024-03-19 | Strife        | L   | 0.443      | -            | -                | -                | -         |    -6.46 | alula, Drew, Ethex, taggy, Weeza  |
|            4 |     2639 | 2024-03-17 | LAG           | L   | 0.429      | -            | -                | -                | -         |    -3.56 | alula, Drew, Ethex, taggy, Weeza  |
|            3 |     2643 | 2024-03-17 | Villainous    | W   | 0.428      | 0.333        | 0.005 (0.001)    | 0.000 (0.000)    | 1 (0.428) |     4.12 | alula, Drew, Ethex, taggy, Weeza  |
|            2 |     4179 | 2024-01-14 | Carpe Diem    | L   | 0.008      | -            | -                | -                | -         |    -0.09 | alula, Drew, Ethex, legacy, Weeza |
|            1 |     4196 | 2024-01-13 | BOSS          | L   | 0.002      | -            | -                | -                | -         |    -0.02 | alula, Drew, Ethex, legacy, Weeza |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,367.86)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-23 |      0.469 | $2,000.00      | $937.93         |
| 2024-03-17 |      0.430 | $1,000.00      | $429.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
