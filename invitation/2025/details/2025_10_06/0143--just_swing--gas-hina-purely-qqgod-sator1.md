### Roster Details<br />
Team Name: Just Swing<br />
Roster: gas, HiNa, Purely, qqGOD, sATOR1<br />
Global Rank: [143](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_06.md)<br />
Regional Rank: [18]( ../../standings_asia_2025_10_06.md)<br />
<br />
Final Rank Value:  716.8<br />
<br />
Final Rank Value (716.8) = Starting Rank Value (759.5) + Head To Head Adjustments (-42.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.204[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 759.5
- 400 + ( ( 0.184 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 759.5


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
|           15 |      589 | 2025-09-14 | FengDa            | L   | 1.000      | -            | -                | -                | -         |    -9.14 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           14 |      774 | 2025-09-10 | NomadS            | L   | 1.000      | -            | -                | -                | -         |    -9.85 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           13 |      819 | 2025-09-09 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |    -2.94 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           12 |      866 | 2025-09-08 | IHC               | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.276 (0.092)    | 0 (0.000) |    16.75 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           11 |     1120 | 2025-08-28 | Rare Atom         | L   | 0.938      | -            | -                | -                | -         |    -2.55 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           10 |     1142 | 2025-08-27 | WDNMD             | W   | 0.932      | 0.367        | 0.000 (0.000)    | 0.038 (0.013)    | 1 (0.932) |     8.89 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            9 |     1148 | 2025-08-26 | Pressure Monsters | W   | 0.931      | 0.367        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.931) |     4.27 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            8 |     1182 | 2025-08-25 | WDNMD             | L   | 0.918      | -            | -                | -                | -         |   -20.46 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            7 |     1572 | 2025-08-12 | BORING PLAYERS    | L   | 0.833      | -            | -                | -                | -         |   -18.44 | gas, Honkai, Purely, qqGOD, sATOR1 |
|            6 |     1625 | 2025-08-11 | Eruption          | L   | 0.826      | -            | -                | -                | -         |    -6.52 | gas, Honkai, Purely, qqGOD, sATOR1 |
|            5 |     3482 | 2025-04-29 | FengDa            | L   | 0.133      | -            | -                | -                | -         |    -2.84 | gas, Marek, Purely, qqGOD, VanceKK |
|            4 |     3522 | 2025-04-27 | Chinggis Warriors | L   | 0.119      | -            | -                | -                | -         |    -0.32 | gas, Marek, Purely, qqGOD, VanceKK |
|            3 |     3564 | 2025-04-26 | Rare Atom         | L   | 0.111      | -            | -                | -                | -         |    -0.37 | gas, Marek, Purely, qqGOD, VanceKK |
|            2 |     3649 | 2025-04-20 | XDM               | W   | 0.072      | 0.624        | 0.002 (0.000)    | 0.002 (0.000)    | 1 (0.072) |     0.49 | gas, Marek, Purely, qqGOD, VanceKK |
|            1 |     3718 | 2025-04-17 | Change The Game   | W   | 0.052      | 0.624        | 0.001 (0.000)    | 0.033 (0.001)    | 1 (0.052) |     0.36 | gas, Marek, Purely, qqGOD, VanceKK |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,132.57)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-14 |      1.000 | $3,000.00      | $3,000.00       |
| 2025-05-04 |      0.166 | $800.00        | $132.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
