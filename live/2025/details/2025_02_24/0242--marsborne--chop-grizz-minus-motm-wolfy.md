### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Grizz, Minus, motm, WolfY<br />
Global Rank: [242](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_24.md)<br />
Regional Rank: [74]( ../../standings_americas_2025_02_24.md)<br />
<br />
Final Rank Value:  562.5<br />
<br />
Final Rank Value (562.5) = Starting Rank Value (502.8) + Head To Head Adjustments (59.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.8
- 400 + ( ( 0.054 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 502.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      252 | 2025-02-11 | Nouns        | L   | 1.000      | -            | -                | -                | -         |    -6.37 | chop, Grizz, Minus, motm, WolfY |
|            7 |      257 | 2025-02-11 | NRG          | L   | 1.000      | -            | -                | -                | -         |    -2.56 | chop, Grizz, Minus, motm, WolfY |
|            6 |      281 | 2025-02-10 | M80          | L   | 1.000      | -            | -                | -                | -         |    -3.18 | chop, Grizz, Minus, motm, WolfY |
|            5 |      287 | 2025-02-10 | MCS          | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.059 (0.008)    | 0 (0.000) |    16.30 | chop, Grizz, Minus, motm, WolfY |
|            4 |      323 | 2025-02-09 | M80          | L   | 1.000      | -            | -                | -                | -         |    -3.02 | chop, Grizz, Minus, motm, WolfY |
|            3 |      355 | 2025-02-08 | Nouns        | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.368 (0.053)    | 0 (0.000) |    26.23 | chop, Grizz, Minus, motm, WolfY |
|            2 |      359 | 2025-02-08 | Getting Info | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.059 (0.008)    | 0 (0.000) |    13.65 | chop, Grizz, Minus, motm, WolfY |
|            1 |      369 | 2025-02-08 | MCS          | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.059 (0.008)    | 0 (0.000) |    18.65 | chop, Grizz, Minus, motm, WolfY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
