### Roster Details<br />
Team Name: Nemesis Impact<br />
Roster: juliano, Kaoday, Monkey D Julie, ramziiN<br />
Global Rank: [267](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [170]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  623.2<br />
<br />
Final Rank Value (623.2) = Starting Rank Value (625.2) + Head To Head Adjustments (-1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.235[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 625.2
- 400 + ( ( 0.115 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 625.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4763 | 2025-11-08 | Fingers Crossed fe | L   | 0.207      | -            | -                | -                | -         |    -3.21 | aiveri, juliano, Kaoday, Monkey D Julie, ramziiN  |
|            4 |     4803 | 2025-11-07 | NIP Impact         | L   | 0.201      | -            | -                | -                | -         |    -2.19 | juliano, Kaoday, Monkey D Julie, RacheLL, ramziiN |
|            3 |     4926 | 2025-11-05 | BIG EQUIPA         | W   | 0.187      | 0.307        | 0.063 (0.004)    | 0.119 (0.007)    | 0 (0.000) |     4.51 | juliano, Kaoday, Monkey D Julie, RacheLL, ramziiN |
|            2 |     5334 | 2025-10-24 | Pigeons            | L   | 0.108      | -            | -                | -                | -         |    -0.94 | juliano, Kaoday, Monkey D Julie, RacheLL, ramziiN |
|            1 |     5746 | 2025-10-09 | Peekaboo           | L   | 0.008      | -            | -                | -                | -         |    -0.13 | juliano, Kaoday, Monkey D Julie, RacheLL, ramziiN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($252.93)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.214 | $500.00        | $107.13         |
| 2025-10-26 |      0.122 | $1,200.00      | $145.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
