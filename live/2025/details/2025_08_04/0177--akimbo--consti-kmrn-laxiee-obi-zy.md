### Roster Details<br />
Team Name: Akimbo<br />
Roster: consti, kmrn, laxiee, obi, zy<br />
Global Rank: [177](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [27]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  617.0<br />
<br />
Final Rank Value (617.0) = Starting Rank Value (617.6) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 617.6
- 400 + ( ( 0.115 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 617.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3299 | 2025-03-06 | MIGHT            | L   | 0.195      | -            | -                | -                | -         |    -2.65 | consti, kmrn, laxiee, obi, zy |
|            5 |     3325 | 2025-03-05 | LAG              | L   | 0.190      | -            | -                | -                | -         |    -1.62 | consti, kmrn, laxiee, obi, zy |
|            4 |     3694 | 2025-02-20 | Aether           | W   | 0.103      | 0.477        | 0.002 (0.000)    | 0.378 (0.019)    | 0 (0.000) |     1.91 | consti, kmrn, laxiee, obi, zy |
|            3 |     3695 | 2025-02-20 | Aether           | W   | 0.103      | 0.477        | 0.002 (0.000)    | 0.378 (0.019)    | 0 (0.000) |     1.92 | consti, kmrn, laxiee, obi, zy |
|            2 |     4031 | 2025-02-08 | Party Astronauts | L   | 0.023      | -            | -                | -                | -         |    -0.36 | consti, kmrn, laxiee, obi, zy |
|            1 |     4038 | 2025-02-08 | BACKWHENEVER     | W   | 0.022      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.16 | consti, kmrn, laxiee, obi, zy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,272.22)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.636 | $2,000.00      | $1,272.22       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
