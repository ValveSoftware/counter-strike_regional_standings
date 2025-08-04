### Roster Details<br />
Team Name: Steel Helmet<br />
Roster: 18yM, AE, captainMo, DD, xiaosaGe<br />
Global Rank: [276](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [42]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  405.2<br />
<br />
Final Rank Value (405.2) = Starting Rank Value (400.1) + Head To Head Adjustments (5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.1
- 400 + ( ( 0.000 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 400.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1294 | 2025-05-13 | Wings Up  | L   | 0.646      | -            | -                | -                | -         |    -2.02 | 18yM, AE, captainMo, DD, xiaosaGe |
|            4 |     1317 | 2025-05-12 | GATERON   | W   | 0.640      | 0.143        | 0.000 (0.000)    | 0.024 (0.002)    | 0 (0.000) |    12.80 | 18yM, AE, captainMo, DD, xiaosaGe |
|            3 |     1395 | 2025-05-09 | Shika     | L   | 0.620      | -            | -                | -                | -         |    -4.41 | 18yM, AE, captainMo, DD, xiaosaGe |
|            2 |     2532 | 2025-03-27 | Wings Up  | L   | 0.337      | -            | -                | -                | -         |    -1.17 | 18yM, AE, captainMo, DD, xiaosaGe |
|            1 |     2607 | 2025-03-26 | Rare Atom | L   | 0.330      | -            | -                | -                | -         |    -0.15 | 18yM, AE, captainMo, DD, xiaosaGe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
