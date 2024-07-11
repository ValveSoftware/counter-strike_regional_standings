### Roster Details<br />
Team Name: Steel Helmet<br />
Roster: 18yM, AE, captainMo, DD, xiaosaGe<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [175](../standings_global.md)<br />
Regional Rank: [21]( ../standings_asia.md)<br />
Final Rank Value:  637.5<br />
<br />
Final Rank Value (637.5) = Starting Rank Value (662.3) + Head To Head Adjustments (-24.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.3
- 400 + ( ( 0.124 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 662.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |        6 | 2024-07-11 | CatEvil     | L   | 1.000      | -            | -                | -                | -         |   -18.26 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           11 |       11 | 2024-07-11 | The MongolZ | L   | 1.000      | -            | -                | -                | -         |    -0.04 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           10 |     2199 | 2024-04-09 | Nemiga      | L   | 0.578      | -            | -                | -                | -         |    -0.53 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            9 |     2229 | 2024-04-08 | Astralis    | L   | 0.571      | -            | -                | -                | -         |    -0.02 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            8 |     3667 | 2024-02-01 | GR          | L   | 0.125      | -            | -                | -                | -         |    -1.76 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            7 |     3670 | 2024-02-01 | Newhappy    | L   | 0.124      | -            | -                | -                | -         |    -2.68 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            6 |     3811 | 2024-01-23 | The Huns    | L   | 0.065      | -            | -                | -                | -         |    -1.46 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            5 |     3815 | 2024-01-23 | Eruption    | W   | 0.065      | 0.143        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.39 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            4 |     3838 | 2024-01-22 | GR          | W   | 0.059      | 0.143        | 0.012 (0.000)    | 0.078 (0.001)    | 0 (0.000) |     1.03 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            3 |     3921 | 2024-01-20 | Newhappy    | L   | 0.044      | -            | -                | -                | -         |    -0.95 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            2 |     3925 | 2024-01-19 | Nirvana     | W   | 0.043      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.26 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            1 |     3984 | 2024-01-18 | Wings Up    | L   | 0.037      | -            | -                | -                | -         |    -0.83 | 18yM, AE, captainMo, DD, xiaosaGe       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,446.93)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
