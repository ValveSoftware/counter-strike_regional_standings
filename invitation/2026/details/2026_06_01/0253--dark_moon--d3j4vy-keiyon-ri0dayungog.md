### Roster Details<br />
Team Name: Dark Moon<br />
Roster: d3j4vy, keiyon, ri0dayungog<br />
Global Rank: [253](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [164]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  651.2<br />
<br />
Final Rank Value (651.2) = Starting Rank Value (650.8) + Head To Head Adjustments (0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.244[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.102[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 650.8
- 400 + ( ( 0.132 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 650.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       87 | 2026-05-29 | DEPO       | L   | 1.000      | -            | -                | -                | -         |    -3.33 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|            4 |       92 | 2026-05-29 | Game Point | W   | 1.000      | 0.354        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     9.88 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|            3 |      104 | 2026-05-29 | Omega      | L   | 1.000      | -            | -                | -                | -         |    -3.90 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|            2 |      186 | 2026-05-26 | 1win       | L   | 1.000      | -            | -                | -                | -         |    -0.87 | d3j4vy, keiyon, Leoo, ri0dayungog, Rui          |
|            1 |      191 | 2026-05-26 | CYBERSHOKE | L   | 1.000      | -            | -                | -                | -         |    -1.44 | d3j4vy, keiyon, Leoo, ri0dayungog, Rui          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($500.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      1.000 | $500.00        | $500.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
