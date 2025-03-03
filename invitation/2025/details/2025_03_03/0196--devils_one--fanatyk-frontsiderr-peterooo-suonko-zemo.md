### Roster Details<br />
Team Name: devils.one<br />
Roster: fanatyk, Frontsiderr, PeTeRoOo, suonko, ZEMO<br />
Global Rank: [196](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [122]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  630.4<br />
<br />
Final Rank Value (630.4) = Starting Rank Value (631.5) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.244[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.5
- 400 + ( ( 0.120 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 631.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1896 | 2024-10-29 | Kyoto         | L   | 0.369      | -            | -                | -                | -         |    -5.63 | fanatyk, Frontsiderr, PeTeRoOo, suonko, ZEMO      |
|            5 |     2983 | 2024-09-21 | 9 Pandas      | L   | 0.112      | -            | -                | -                | -         |    -0.52 | fanatyk, Frontsiderr, karmazynsz, Pelle, ZEMO     |
|            4 |     3007 | 2024-09-20 | Johnny Speeds | L   | 0.106      | -            | -                | -                | -         |    -0.65 | fanatyk, Frontsiderr, karmazynsz, Pelle, PeTeRoOo |
|            3 |     3036 | 2024-09-19 | BC.Game       | W   | 0.100      | 0.443        | 0.076 (0.003)    | 0.906 (0.040)    | 0 (0.000) |     2.80 | fanatyk, Frontsiderr, Pelle, suonko, ZEMO         |
|            2 |     3183 | 2024-09-14 | 9INE          | W   | 0.067      | 0.443        | 0.011 (0.000)    | 0.273 (0.008)    | 0 (0.000) |     1.36 | fanatyk, Frontsiderr, Pelle, suonko, ZEMO         |
|            1 |     3202 | 2024-09-14 | RUSH B        | W   | 0.065      | 0.443        | 0.027 (0.001)    | 0.578 (0.017)    | 0 (0.000) |     1.56 | fanatyk, Frontsiderr, Pelle, PeTeRoOo, ZEMO       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($265.22)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-24 |      0.133 | $2,000.00      | $265.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
