### Roster Details<br />
Team Name: JANO<br />
Roster: Aerial, allu, HENU, juho, xseveN<br />
Global Rank: [72](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [50]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  964.1<br />
<br />
Final Rank Value (964.1) = Starting Rank Value (980.0) + Head To Head Adjustments (-15.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.433[<sup>1</sup>](#table2)
- Bounty Collected: 0.339[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.364[<sup>2</sup>](#table1)

The average of these factors is 0.296<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 980.0
- 400 + ( ( 0.296 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 980.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       47 | 2024-10-20 | ENCE Academy      | W   | 1.000      | 0.303        | 0.016 (0.005)    | 0.269 (0.081)    | 1 (1.000) |     8.63 | Aerial, allu, HENU, juho, xseveN |
|           12 |       99 | 2024-10-18 | B8                | L   | 1.000      | -            | -                | -                | -         |    -6.07 | Aerial, allu, HENU, juho, xseveN |
|           11 |      146 | 2024-10-16 | Ninjas in Pyjamas | W   | 1.000      | 0.589        | 0.154 (0.091)    | 0.250 (0.147)    | 1 (1.000) |    24.40 | Aerial, allu, HENU, juho, xseveN |
|           10 |      162 | 2024-10-16 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -0.47 | Aerial, allu, HENU, juho, xseveN |
|            9 |      354 | 2024-10-06 | Heimo             | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.163 (0.023)    | 0 (0.000) |     5.05 | Aerial, allu, HENU, juho, xseveN |
|            8 |      362 | 2024-10-06 | ENCE Academy      | L   | 1.000      | -            | -                | -                | -         |   -22.57 | Aerial, allu, HENU, juho, xseveN |
|            7 |      397 | 2024-10-05 | cspojat           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.35 | Aerial, allu, HENU, juho, xseveN |
|            6 |     1300 | 2024-09-08 | Aurora Young Blud | L   | 0.898      | -            | -                | -                | -         |   -17.46 | Aerial, allu, HENU, juho, xseveN |
|            5 |     1351 | 2024-09-06 | Revenant          | L   | 0.886      | -            | -                | -                | -         |   -16.20 | Aerial, allu, HENU, juho, xseveN |
|            4 |     1441 | 2024-09-04 | Rhyno             | W   | 0.871      | 0.435        | 0.042 (0.016)    | 0.465 (0.176)    | 0 (0.000) |    11.24 | Aerial, allu, HENU, juho, xseveN |
|            3 |     1477 | 2024-09-03 | GUN5              | L   | 0.864      | -            | -                | -                | -         |   -11.51 | Aerial, allu, HENU, juho, xseveN |
|            2 |     2530 | 2024-08-03 | ENCE Academy      | W   | 0.658      | 0.143        | 0.016 (0.001)    | 0.269 (0.025)    | 1 (0.658) |     5.18 | Aerial, allu, HENU, juho, xseveN |
|            1 |     2592 | 2024-08-01 | Heimo             | W   | 0.646      | 0.143        | 0.003 (0.000)    | 0.163 (0.015)    | 1 (0.646) |     2.62 | Aerial, allu, HENU, juho, xseveN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,320.00)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-10-20 |      1.000 | $3,320.00      | $3,320.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
