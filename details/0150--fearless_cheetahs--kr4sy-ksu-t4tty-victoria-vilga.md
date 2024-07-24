### Roster Details<br />
Team Name: Fearless Cheetahs<br />
Roster: kr4sy, Ksu, t4tty, Victoria, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [150](../standings_global.md)<br />
Regional Rank: [98]( ../standings_europe.md)<br />
Final Rank Value:  706.8<br />
<br />
Final Rank Value (706.8) = Starting Rank Value (689.4) + Head To Head Adjustments (17.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.4
- 400 + ( ( 0.143 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 689.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2247 | 2024-04-21 | ex-GUILD fe   | L   | 0.574      | -            | -                | -                | -         |    -9.97 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            9 |     2266 | 2024-04-20 | BIG EQUIPA    | L   | 0.567      | -            | -                | -                | -         |    -7.00 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            8 |     2311 | 2024-04-19 | 1WIN Gang     | W   | 0.560      | 0.331        | 0.002 (0.000)    | 0.020 (0.004)    | 0 (0.000) |     7.45 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            7 |     2530 | 2024-04-11 | Crescent fe   | W   | 0.507      | 0.331        | 0.006 (0.001)    | 0.092 (0.015)    | 0 (0.000) |     6.78 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            6 |     2702 | 2024-04-07 | NIP Impact    | L   | 0.478      | -            | -                | -                | -         |    -7.30 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            5 |     2719 | 2024-04-06 | Let Her Cook  | W   | 0.472      | 0.262        | 0.077 (0.010)    | 0.170 (0.021)    | 0 (0.000) |    11.86 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            4 |     2939 | 2024-03-27 | Spirit fe     | W   | 0.407      | 0.331        | 0.004 (0.000)    | 0.073 (0.010)    | 0 (0.000) |     5.67 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            3 |     3021 | 2024-03-21 | Let Her Cook  | W   | 0.367      | 0.331        | 0.077 (0.009)    | 0.170 (0.021)    | 0 (0.000) |     9.45 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            2 |     3379 | 2024-03-06 | NAVI Javelins | L   | 0.267      | -            | -                | -                | -         |    -2.52 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            1 |     3598 | 2024-02-25 | 1WIN Gang     | W   | 0.200      | 0.250        | 0.002 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     2.96 | kr4sy, Ksu, t4tty, Victoria, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,068.01)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.574 | $1,600.00      | $917.84         |
| 2024-02-25 |      0.200 | $750.00        | $150.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
