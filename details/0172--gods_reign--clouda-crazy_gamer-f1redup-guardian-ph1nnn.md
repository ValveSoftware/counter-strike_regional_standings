### Roster Details<br />
Team Name: Gods Reign<br />
Roster: clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [172](../standings_global.md)<br />
Regional Rank: [19]( ../standings_asia.md)<br />
Final Rank Value:  643.1<br />
<br />
Final Rank Value (643.1) = Starting Rank Value (646.4) + Head To Head Adjustments (-3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.020[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.4
- 400 + ( ( 0.117 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 646.4


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
|           11 |     3517 | 2024-02-09 | Pak Boyz       | L   | 0.177      | -            | -                | -                | -         |    -2.51 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           10 |     3529 | 2024-02-08 | True Rippers   | L   | 0.172      | -            | -                | -                | -         |    -2.51 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|            9 |     3532 | 2024-02-07 | WahWah         | W   | 0.170      | 0.435        | 0.004 (0.000)    | 0.007 (0.001)    | 1 (0.170) |     2.74 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|            8 |     3865 | 2024-01-21 | Trouble makers | L   | 0.052      | -            | -                | -                | -         |    -1.18 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            7 |     3877 | 2024-01-20 | MAG            | L   | 0.050      | -            | -                | -                | -         |    -1.10 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            6 |     3964 | 2024-01-19 | SR Nacague     | W   | 0.038      | 0.143        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.24 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            5 |     3979 | 2024-01-19 | RESILIENCE     | W   | 0.037      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.23 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            4 |     4064 | 2024-01-17 | MAG            | W   | 0.026      | 0.143        | 0.000 (0.000)    | 0.034 (0.000)    | 0 (0.000) |     0.25 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            3 |     4067 | 2024-01-17 | SR Nacague     | W   | 0.026      | 0.143        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.16 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            2 |     4073 | 2024-01-17 | Drippy Lab     | W   | 0.025      | 0.143        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.16 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            1 |     4078 | 2024-01-17 | DarkSide       | W   | 0.025      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.16 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($477.93)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
