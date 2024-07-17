### Roster Details<br />
Team Name: Fearless Cheetahs<br />
Roster: kr4sy, Ksu, t4tty, Victoria, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [150](../standings_global.md)<br />
Regional Rank: [98]( ../standings_europe.md)<br />
Final Rank Value:  736.9<br />
<br />
Final Rank Value (736.9) = Starting Rank Value (717.0) + Head To Head Adjustments (19.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.0
- 400 + ( ( 0.148 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 717.0


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
|           10 |     1959 | 2024-04-21 | ex-GUILD fe   | L   | 0.621      | -            | -                | -                | -         |   -10.90 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            9 |     1978 | 2024-04-20 | BIG EQUIPA    | L   | 0.614      | -            | -                | -                | -         |    -7.43 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            8 |     2023 | 2024-04-19 | 1WIN Gang     | W   | 0.608      | 0.331        | 0.002 (0.000)    | 0.023 (0.005)    | 0 (0.000) |     7.87 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            7 |     2242 | 2024-04-11 | Crescent fe   | W   | 0.554      | 0.331        | 0.007 (0.001)    | 0.101 (0.019)    | 0 (0.000) |     7.17 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            6 |     2414 | 2024-04-07 | NIP Impact    | L   | 0.525      | -            | -                | -                | -         |    -8.12 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            5 |     2431 | 2024-04-06 | Let Her Cook  | W   | 0.519      | 0.262        | 0.092 (0.012)    | 0.185 (0.025)    | 0 (0.000) |    13.38 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            4 |     2651 | 2024-03-27 | Spirit fe     | W   | 0.454      | 0.331        | 0.004 (0.001)    | 0.038 (0.006)    | 0 (0.000) |     6.12 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            3 |     2733 | 2024-03-21 | Let Her Cook  | W   | 0.415      | 0.331        | 0.092 (0.013)    | 0.185 (0.025)    | 0 (0.000) |    10.95 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            2 |     3091 | 2024-03-06 | NAVI Javelins | L   | 0.315      | -            | -                | -                | -         |    -2.77 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            1 |     3310 | 2024-02-25 | 1WIN Gang     | W   | 0.247      | 0.250        | 0.002 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     3.62 | kr4sy, Ksu, t4tty, Victoria, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,178.99)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.621 | $1,600.00      | $993.40         |
| 2024-02-25 |      0.247 | $750.00        | $185.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
