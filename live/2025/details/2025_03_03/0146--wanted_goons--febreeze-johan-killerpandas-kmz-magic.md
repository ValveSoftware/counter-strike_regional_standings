### Roster Details<br />
Team Name: Wanted Goons<br />
Roster: febreeze, Johan, killerPandas, KmZ, Magic<br />
Global Rank: [146](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_03.md)<br />
Regional Rank: [39]( ../../standings_americas_2025_03_03.md)<br />
<br />
Final Rank Value:  691.8<br />
<br />
Final Rank Value (691.8) = Starting Rank Value (693.4) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.117[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 693.4
- 400 + ( ( 0.152 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 693.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |        3 | 2025-03-01 | Marsborne       | L   | 1.000      | -            | -                | -                | -         |    -8.83 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            4 |       14 | 2025-03-01 | Amped           | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     4.91 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            3 |     1047 | 2024-12-06 | SUPER EVIL GANG | L   | 0.623      | -            | -                | -                | -         |   -10.00 | AGB, febreeze, jsfeltner, killerPandas, KmZ   |
|            2 |     1077 | 2024-12-05 | MCS             | W   | 0.616      | 0.372        | 0.002 (0.001)    | 0.060 (0.014)    | 0 (0.000) |     6.97 | febreeze, jsfeltner, killerPandas, KmZ, Magic |
|            1 |     1110 | 2024-12-04 | OutGoing        | W   | 0.610      | 0.372        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.32 | febreeze, jsfeltner, killerPandas, KmZ, Magic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,272.69)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.636 | $2,000.00      | $1,272.69       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
