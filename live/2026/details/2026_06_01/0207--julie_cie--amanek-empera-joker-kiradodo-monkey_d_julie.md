### Roster Details<br />
Team Name: Julie&Cie<br />
Roster: amanek, Empera, Joker, KIRADODO, Monkey D Julie<br />
Global Rank: [207](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [132]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  735.3<br />
<br />
Final Rank Value (735.3) = Starting Rank Value (769.6) + Head To Head Adjustments (-34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.250[<sup>2</sup>](#table1)

The average of these factors is 0.194<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 769.6
- 400 + ( ( 0.194 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 769.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      174 | 2026-05-27 | Hashiras         | L   | 1.000      | -            | -                | -                | -         |   -10.23 | amanek, Empera, Joker, KIRADODO, Monkey D Julie  |
|           12 |      237 | 2026-05-25 | EC BANGA         | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.36 | dodZ, Empera, Joker, KIRADODO, Monkey D Julie    |
|           11 |      306 | 2026-05-23 | ex-Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -10.61 | dodZ, Empera, Joker, KIRADODO, Monkey D Julie    |
|           10 |      319 | 2026-05-23 | brazylijski luz  | L   | 1.000      | -            | -                | -                | -         |    -9.45 | dodZ, Empera, Joker, KIRADODO, Monkey D Julie    |
|            9 |      371 | 2026-05-22 | Subtop De France | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.082 (0.012)    | 0 (0.000) |    15.22 | amanek, Empera, Joker, KIRADODO, Monkey D Julie  |
|            8 |      403 | 2026-05-21 | SAW              | L   | 1.000      | -            | -                | -                | -         |   -17.00 | amanek, Empera, Joker, KIRADODO, Monkey D Julie  |
|            7 |     1359 | 2026-04-24 | BET-M            | L   | 0.946      | -            | -                | -                | -         |    -2.13 | amanek, Empera, KIRADODO, Monkey D Julie, Razzmo |
|            6 |     1426 | 2026-04-22 | BIG Academy      | L   | 0.933      | -            | -                | -                | -         |   -15.93 | amanek, Joker, KIRADODO, Monkey D Julie, NAKO    |
|            5 |     1801 | 2026-04-05 | aAa              | L   | 0.821      | -            | -                | -                | -         |    -8.21 | amanek, Empera, KIRADODO, Monkey D Julie, Razzmo |
|            4 |     1823 | 2026-04-05 | Subtop De France | W   | 0.820      | 0.362        | 0.004 (0.001)    | 0.082 (0.024)    | 1 (0.820) |    12.39 | amanek, Empera, KIRADODO, Monkey D Julie, Razzmo |
|            3 |     1841 | 2026-04-05 | aAa              | L   | 0.818      | -            | -                | -                | -         |    -8.31 | amanek, Empera, KIRADODO, Monkey D Julie, Razzmo |
|            2 |     1874 | 2026-04-04 | VCGO             | W   | 0.814      | 0.362        | 0.001 (0.000)    | 0.027 (0.008)    | 1 (0.814) |     8.27 | amanek, Empera, KIRADODO, Monkey D Julie, Razzmo |
|            1 |     1893 | 2026-04-04 | MyHUD            | W   | 0.813      | 0.362        | 0.001 (0.000)    | 0.027 (0.008)    | 1 (0.813) |     8.26 | amanek, Empera, KIRADODO, Monkey D Julie, Razzmo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,332.14)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.821 | $4,057.00      | $3,332.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
