### Roster Details<br />
Team Name: hindsight<br />
Roster: Ann4, jenkon, Madam, mikeri, pullox<br />
Global Rank: [210](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [130]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  626.1<br />
<br />
Final Rank Value (626.1) = Starting Rank Value (631.2) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.2
- 400 + ( ( 0.121 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 631.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1095 | 2025-10-24 | Flame Sharks fe | L   | 0.947      | -            | -                | -                | -         |   -12.13 | Ann4, jenkon, Madam, mikeri, pullox |
|            5 |     1337 | 2025-10-15 | Let Her Cook    | L   | 0.888      | -            | -                | -                | -         |    -9.66 | Ann4, jenkon, Madam, mikeri, pullox |
|            4 |     1898 | 2025-10-01 | NIP Impact      | L   | 0.794      | -            | -                | -                | -         |    -8.42 | Ann4, jenkon, Madam, mikeri, pullox |
|            3 |     2356 | 2025-09-18 | 888aura         | W   | 0.707      | 0.523        | 0.002 (0.001)    | 0.051 (0.019)    | 0 (0.000) |    11.03 | Ann4, jenkon, Madam, mikeri, pullox |
|            2 |     2388 | 2025-09-17 | AKA HERO KAJO   | W   | 0.701      | 0.523        | 0.002 (0.001)    | 0.055 (0.020)    | 0 (0.000) |    10.57 | Ann4, jenkon, Madam, mikeri, pullox |
|            1 |     3154 | 2025-08-21 | Hanbaobao       | W   | 0.521      | 0.444        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.50 | Ann4, jenkon, Madam, mikeri, pullox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,393.40)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-26 |      0.961 | $1,450.00      | $1,393.40       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
