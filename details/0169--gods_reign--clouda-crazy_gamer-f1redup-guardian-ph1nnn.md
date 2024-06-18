### Roster Details<br />
Team Name: Gods Reign<br />
Roster: clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [169](../standings_global.md)<br />
Regional Rank: [17]( ../standings_asia.md)<br />
Final Rank Value:  654.6<br />
<br />
Final Rank Value (654.6) = Starting Rank Value (660.8) + Head To Head Adjustments (-6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.8
- 400 + ( ( 0.128 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 660.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     3384 | 2024-02-09 | Pak Boyz       | L   | 0.333      | -            | -                | -                | -         |    -4.58 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           10 |     3396 | 2024-02-08 | True Rippers   | L   | 0.327      | -            | -                | -                | -         |    -4.76 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|            9 |     3399 | 2024-02-07 | WahWah         | W   | 0.326      | 0.435        | 0.006 (0.001)    | 0.012 (0.002)    | 1 (0.326) |     5.25 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|            8 |     3732 | 2024-01-21 | Trouble makers | L   | 0.208      | -            | -                | -                | -         |    -4.74 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            7 |     3744 | 2024-01-20 | MAG            | L   | 0.206      | -            | -                | -                | -         |    -4.57 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            6 |     3831 | 2024-01-19 | SR Nacague     | W   | 0.194      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     1.15 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            5 |     3846 | 2024-01-19 | RESILIENCE     | W   | 0.193      | 0.143        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.09 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            4 |     3931 | 2024-01-17 | MAG            | W   | 0.182      | 0.143        | 0.000 (0.000)    | 0.074 (0.002)    | 0 (0.000) |     1.68 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            3 |     3934 | 2024-01-17 | SR Nacague     | W   | 0.181      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     1.10 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            2 |     3940 | 2024-01-17 | Drippy Lab     | W   | 0.181      | 0.143        | 0.000 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     1.08 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            1 |     3945 | 2024-01-17 | DarkSide       | W   | 0.180      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.07 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($867.11)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
