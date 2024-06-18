### Roster Details<br />
Team Name: ATOX<br />
Roster: Annihilation, dobu, kabal, MiQ, Zesta<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [76](../standings_global.md)<br />
Regional Rank: [4]( ../standings_asia.md)<br />
Final Rank Value:  980.4<br />
<br />
Final Rank Value (980.4) = Starting Rank Value (951.0) + Head To Head Adjustments (29.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.301[<sup>2</sup>](#table1)

The average of these factors is 0.271<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 951.0
- 400 + ( ( 0.271 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 951.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      250 | 2024-06-09 | Lynn Vision | L   | 1.000      | -            | -                | -                | -         |    -9.03 | Annihilation, dobu, kabal, MiQ, Zesta |
|           25 |      443 | 2024-06-06 | Lynn Vision | W   | 1.000      | 0.416        | 0.126 (0.052)    | 0.258 (0.107)    | 0 (0.000) |    22.79 | Annihilation, dobu, kabal, MiQ, Zesta |
|           24 |      506 | 2024-06-05 | GR          | W   | 1.000      | 0.416        | 0.011 (0.004)    | 0.119 (0.049)    | 0 (0.000) |     5.03 | Annihilation, dobu, kabal, MiQ, Zesta |
|           23 |      547 | 2024-06-04 | -72c        | W   | 1.000      | 0.416        | 0.004 (0.002)    | -                | 0 (0.000) |     2.87 | Annihilation, dobu, kabal, MiQ, Zesta |
|           22 |      637 | 2024-05-31 | Lynn Vision | L   | 1.000      | -            | -                | -                | -         |    -7.97 | Annihilation, dobu, kabal, MiQ, Zesta |
|           21 |      690 | 2024-05-29 | BLEED       | L   | 1.000      | -            | -                | -                | -         |    -4.89 | Annihilation, dobu, kabal, MiQ, Zesta |
|           20 |      713 | 2024-05-29 | OG          | W   | 1.000      | 0.500        | 0.235 (0.118)    | 0.253 (0.127)    | 1 (1.000) |    26.12 | Annihilation, dobu, kabal, MiQ, Zesta |
|           19 |     1005 | 2024-05-18 | The MongolZ | L   | 0.994      | -            | -                | -                | -         |    -0.20 | Annihilation, dobu, kabal, MiQ, Zesta |
|           18 |     1036 | 2024-05-17 | The Huns    | W   | 0.987      | 0.143        | 0.000 (0.000)    | 0.065 (0.009)    | 1 (0.987) |     2.48 | Annihilation, dobu, kabal, MiQ, Zesta |
|           17 |     2269 | 2024-04-02 | The MongolZ | L   | 0.688      | -            | -                | -                | -         |    -0.13 | Annihilation, dobu, kabal, MiQ, Zesta |
|           16 |     2275 | 2024-04-02 | Lynn Vision | L   | 0.687      | -            | -                | -                | -         |    -4.58 | Annihilation, dobu, kabal, MiQ, Zesta |
|           15 |     2632 | 2024-03-13 | -72c        | W   | 0.555      | -            | -                | -                | 0 (0.000) |     0.79 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           14 |     2643 | 2024-03-13 | ROUX        | W   | 0.554      | -            | -                | -                | 0 (0.000) |     0.78 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           13 |     2964 | 2024-02-27 | FlyQuest    | L   | 0.459      | -            | -                | -                | -         |    -1.16 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           12 |     2988 | 2024-02-27 | TYLOO       | W   | 0.453      | 0.143        | 0.003 (0.000)    | 0.093 (0.006)    | 1 (0.453) |     3.80 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           11 |     2991 | 2024-02-26 | MAG         | W   | 0.452      | 0.143        | -                | 0.074 (0.005)    | 1 (0.452) |     1.24 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           10 |     3006 | 2024-02-25 | FlyQuest    | L   | 0.445      | -            | -                | -                | -         |    -1.10 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            9 |     3508 | 2024-02-02 | GR          | L   | 0.287      | -            | -                | -                | -         |    -7.40 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            8 |     3555 | 2024-01-31 | NKT         | W   | 0.274      | 0.143        | 0.003 (0.000)    | -                | 0 (0.000) |     1.70 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            7 |     3556 | 2024-01-31 | Rare Atom   | W   | 0.274      | 0.143        | 0.009 (0.000)    | 0.071 (0.003)    | -         |     1.57 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            6 |     3680 | 2024-01-23 | The Huns    | L   | 0.220      | -            | -                | -                | -         |    -6.38 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            5 |     3707 | 2024-01-22 | Rare Atom   | W   | 0.215      | 0.143        | 0.009 (0.000)    | 0.071 (0.002)    | -         |     1.22 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            4 |     3733 | 2024-01-21 | The Huns    | W   | 0.208      | 0.143        | -                | 0.065 (0.002)    | -         |     0.53 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            3 |     3741 | 2024-01-21 | The MongolZ | L   | 0.206      | -            | -                | -                | -         |    -0.02 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            2 |     3833 | 2024-01-19 | GR          | W   | 0.194      | 0.143        | 0.011 (0.000)    | 0.119 (0.003)    | -         |     1.14 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            1 |     3842 | 2024-01-19 | Fort Arena  | W   | 0.193      | -            | -                | -                | -         |     0.27 | AccuracyTG, dobu, kabal, MiQ, Zesta   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,000.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
