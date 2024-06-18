### Roster Details<br />
Team Name: Grannys Knockers<br />
Roster: Anlelele, b0RUP, Kristou, niko, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [104](../standings_global.md)<br />
Regional Rank: [74]( ../standings_europe.md)<br />
Final Rank Value:  855.9<br />
<br />
Final Rank Value (855.9) = Starting Rank Value (803.3) + Head To Head Adjustments (52.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.075[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 803.3
- 400 + ( ( 0.198 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 803.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1317 | 2024-05-08 | Sashi             | L   | 0.928      | -            | -                | -                | -         |    -2.45 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            9 |     1341 | 2024-05-07 | Gaimin Gladiators | W   | 0.920      | 0.396        | 0.076 (0.028)    | 0.632 (0.230)    | 0 (0.000) |    25.22 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            8 |     1356 | 2024-05-06 | brazylijski luz   | W   | 0.913      | 0.396        | 0.005 (0.002)    | 0.306 (0.111)    | 0 (0.000) |    16.85 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            7 |     1433 | 2024-05-02 | Endpoint          | L   | 0.888      | -            | -                | -                | -         |    -8.72 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            6 |     1500 | 2024-04-29 | MOUZ NXT          | L   | 0.868      | -            | -                | -                | -         |    -5.18 | b0RUP, Kristou, niko, refrezh, TMB       |
|            5 |     1521 | 2024-04-28 | Nemiga            | W   | 0.861      | 0.435        | 0.486 (0.182)    | 0.694 (0.260)    | 0 (0.000) |    25.24 | b0RUP, Kristou, niko, refrezh, TMB       |
|            4 |     1594 | 2024-04-25 | Nexus             | W   | 0.841      | 0.435        | 0.012 (0.004)    | 0.397 (0.145)    | 0 (0.000) |    16.37 | BTN, ERSIN, ragga, s0und, XELLOW         |
|            3 |     1640 | 2024-04-23 | Sangal            | L   | 0.827      | -            | -                | -                | -         |    -3.66 | Anlelele, b0RUP, Kristou, niko, TMB      |
|            2 |     1643 | 2024-04-22 | Zero Tenacity     | L   | 0.823      | -            | -                | -                | -         |    -4.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     1654 | 2024-04-22 | Permitta          | L   | 0.820      | -            | -                | -                | -         |    -6.42 | bnox, maaryy, mASKED, morelz, Vegi       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,737.54)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
