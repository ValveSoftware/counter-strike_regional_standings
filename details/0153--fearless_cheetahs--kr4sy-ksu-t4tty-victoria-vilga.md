### Roster Details<br />
Team Name: Fearless Cheetahs<br />
Roster: kr4sy, Ksu, t4tty, Victoria, vilga<br />
Global Rank: [153](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [101]( ../standings_europe.md)<br />
<br />
Final Rank Value:  699.0<br />
<br />
Final Rank Value (699.0) = Starting Rank Value (683.9) + Head To Head Adjustments (15.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 683.9
- 400 + ( ( 0.138 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 683.9


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
|           10 |     2489 | 2024-04-21 | ex-GUILD fe   | L   | 0.526      | -            | -                | -                | -         |    -9.11 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            9 |     2508 | 2024-04-20 | BIG EQUIPA    | L   | 0.520      | -            | -                | -                | -         |    -6.50 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            8 |     2553 | 2024-04-19 | 1WIN Gang     | W   | 0.513      | 0.331        | 0.001 (0.000)    | 0.017 (0.003)    | 0 (0.000) |     6.96 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            7 |     2772 | 2024-04-11 | Crescent fe   | W   | 0.460      | 0.331        | 0.005 (0.001)    | 0.080 (0.012)    | 0 (0.000) |     6.26 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            6 |     2944 | 2024-04-07 | NIP Impact    | L   | 0.431      | -            | -                | -                | -         |    -6.57 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            5 |     2961 | 2024-04-06 | Let Her Cook  | W   | 0.424      | 0.262        | 0.061 (0.007)    | 0.147 (0.016)    | 0 (0.000) |    10.54 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            4 |     3181 | 2024-03-27 | Spirit fe     | W   | 0.360      | 0.331        | 0.005 (0.001)    | 0.101 (0.012)    | 0 (0.000) |     5.27 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            3 |     3263 | 2024-03-21 | Let Her Cook  | W   | 0.320      | 0.331        | 0.061 (0.006)    | 0.147 (0.016)    | 0 (0.000) |     8.12 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            2 |     3621 | 2024-03-06 | NAVI Javelins | L   | 0.220      | -            | -                | -                | -         |    -2.14 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            1 |     3840 | 2024-02-25 | 1WIN Gang     | W   | 0.153      | 0.250        | 0.001 (0.000)    | 0.017 (0.001)    | 0 (0.000) |     2.27 | kr4sy, Ksu, t4tty, Victoria, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($956.89)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.526 | $1,600.00      | $842.18         |
| 2024-02-25 |      0.153 | $750.00        | $114.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
