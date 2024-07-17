### Roster Details<br />
Team Name: Newhappy<br />
Roster: jiejie, L1haNg, rage, SPine, Tiger<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [193](../standings_global.md)<br />
Regional Rank: [20]( ../standings_asia.md)<br />
Final Rank Value:  535.3<br />
<br />
Final Rank Value (535.3) = Starting Rank Value (522.2) + Head To Head Adjustments (13.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 522.2
- 400 + ( ( 0.057 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 522.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     3507 | 2024-02-17 | Lynn Vision        | W   | 0.193      | 0.143        | 0.126 (0.003)    | 0.212 (0.006)    | 0 (0.000) |     5.85 | jiejie, L1haNg, rage, SPine, Tiger |
|           11 |     3511 | 2024-02-17 | MAG                | W   | 0.192      | 0.143        | 0.000 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     2.85 | jiejie, L1haNg, rage, SPine, Tiger |
|           10 |     3536 | 2024-02-16 | Lynn Vision        | L   | 0.186      | -            | -                | -                | -         |    -0.20 | jiejie, karl, L1haNg, rage, SPine  |
|            9 |     3542 | 2024-02-16 | GR                 | W   | 0.185      | 0.143        | 0.012 (0.000)    | 0.065 (0.002)    | 0 (0.000) |     4.31 | jiejie, karl, L1haNg, rage, SPine  |
|            8 |     3829 | 2024-02-01 | GR                 | L   | 0.086      | -            | -                | -                | -         |    -0.72 | 2x2x, L1haNg, SPine, Tiger, tutu   |
|            7 |     3833 | 2024-02-01 | TYLOO              | L   | 0.085      | -            | -                | -                | -         |    -0.39 | 2x2x, L1haNg, SPine, Tiger, tutu   |
|            6 |     3834 | 2024-02-01 | Steel Helmet       | W   | 0.085      | 0.143        | 0.009 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     1.83 | 2x2x, L1haNg, SPine, Tiger, tutu   |
|            5 |     3938 | 2024-01-25 | Rare Atom          | L   | 0.038      | -            | -                | -                | -         |    -0.35 | 2x2x, L1haNg, SPine, Tiger, tutu   |
|            4 |     3951 | 2024-01-24 | Noobs But Diligent | W   | 0.033      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.35 | 2x2x, L1haNg, SPine, Tiger, tutu   |
|            3 |     4003 | 2024-01-22 | Eruption           | L   | 0.019      | -            | -                | -                | -         |    -0.40 | 2x2x, L1haNg, SPine, Tiger, tutu   |
|            2 |     4037 | 2024-01-21 | Rare Atom          | L   | 0.011      | -            | -                | -                | -         |    -0.10 | 2x2x, L1haNg, SPine, Tiger, tutu   |
|            1 |     4085 | 2024-01-20 | Steel Helmet       | W   | 0.005      | 0.143        | 0.009 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.10 | 2x2x, L1haNg, SPine, Tiger, tutu   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
