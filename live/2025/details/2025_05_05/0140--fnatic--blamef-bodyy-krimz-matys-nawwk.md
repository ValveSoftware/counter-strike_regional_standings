### Roster Details<br />
Team Name: fnatic<br />
Roster: blameF, bodyy, KRIMZ, MATYS, nawwk<br />
Global Rank: [140](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [88]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  653.9<br />
<br />
Final Rank Value (653.9) = Starting Rank Value (651.1) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.026[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 651.1
- 400 + ( ( 0.138 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 651.1


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
|            8 |     2870 | 2024-12-01 | Rare Atom     | L   | 0.164      | -            | -                | -                | -         |    -0.12 | blameF, bodyy, KRIMZ, MATYS, nawwk |
|            7 |     2902 | 2024-11-30 | Cloud9        | L   | 0.158      | -            | -                | -                | -         |    -2.36 | blameF, bodyy, KRIMZ, MATYS, nawwk |
|            6 |     2905 | 2024-11-29 | Wildcard      | L   | 0.157      | -            | -                | -                | -         |    -0.49 | blameF, bodyy, KRIMZ, MATYS, nawwk |
|            5 |     3098 | 2024-11-20 | ECLOT         | W   | 0.091      | 0.143        | 0.108 (0.001)    | 0.654 (0.008)    | 1 (0.091) |     2.61 | blameF, bodyy, KRIMZ, MATYS, nawwk |
|            4 |     3109 | 2024-11-19 | FaZe          | L   | 0.085      | -            | -                | -                | -         |    -0.00 | blameF, bodyy, KRIMZ, MATYS, nawwk |
|            3 |     3123 | 2024-11-17 | BetBoom       | W   | 0.077      | 0.143        | 0.180 (0.002)    | 1.000 (0.011)    | 1 (0.077) |     2.19 | blameF, bodyy, KRIMZ, MATYS, nawwk |
|            2 |     3141 | 2024-11-17 | Rebels        | W   | 0.072      | 0.143        | 0.000 (0.000)    | 0.104 (0.001)    | 1 (0.072) |     0.97 | blameF, bodyy, KRIMZ, MATYS, nawwk |
|            1 |     3153 | 2024-11-16 | Natus Vincere | L   | 0.070      | -            | -                | -                | -         |    -0.01 | blameF, bodyy, KRIMZ, MATYS, nawwk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,785.83)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.179 | $10,000.00     | $1,785.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
