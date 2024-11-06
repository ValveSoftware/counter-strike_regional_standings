### Roster Details<br />
Team Name: JANO<br />
Roster: Aerial, allu, HENU, juho, xseveN<br />
Global Rank: [75](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [51]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  921.7<br />
<br />
Final Rank Value (921.7) = Starting Rank Value (928.6) + Head To Head Adjustments (-6.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.391[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.341[<sup>2</sup>](#table1)

The average of these factors is 0.269<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 928.6
- 400 + ( ( 0.269 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 928.6


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
|           13 |      318 | 2024-10-20 | ENCE Academy      | W   | 1.000      | 0.303        | 0.009 (0.003)    | 0.265 (0.080)    | 1 (1.000) |     9.64 | Aerial, allu, HENU, juho, xseveN |
|           12 |      370 | 2024-10-18 | B8                | L   | 1.000      | -            | -                | -                | -         |    -4.63 | Aerial, allu, HENU, juho, xseveN |
|           11 |      417 | 2024-10-16 | Ninjas in Pyjamas | W   | 1.000      | 0.589        | 0.071 (0.042)    | 0.217 (0.128)    | 1 (1.000) |    22.63 | Aerial, allu, HENU, juho, xseveN |
|           10 |      433 | 2024-10-16 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -0.30 | Aerial, allu, HENU, juho, xseveN |
|            9 |      625 | 2024-10-06 | Heimo             | W   | 0.994      | 0.143        | 0.001 (0.000)    | 0.163 (0.023)    | 0 (0.000) |     5.91 | Aerial, allu, HENU, juho, xseveN |
|            8 |      633 | 2024-10-06 | ENCE Academy      | L   | 0.993      | -            | -                | -                | -         |   -21.28 | Aerial, allu, HENU, juho, xseveN |
|            7 |      668 | 2024-10-05 | cspojat           | W   | 0.986      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.69 | Aerial, allu, HENU, juho, xseveN |
|            6 |     1571 | 2024-09-08 | Aurora Young Blud | L   | 0.806      | -            | -                | -                | -         |   -14.60 | Aerial, allu, HENU, juho, xseveN |
|            5 |     1622 | 2024-09-06 | Revenant          | L   | 0.794      | -            | -                | -                | -         |   -13.91 | Aerial, allu, HENU, juho, xseveN |
|            4 |     1712 | 2024-09-04 | Rhyno             | W   | 0.779      | 0.435        | 0.018 (0.006)    | 0.425 (0.144)    | 0 (0.000) |     9.91 | Aerial, allu, HENU, juho, xseveN |
|            3 |     1748 | 2024-09-03 | GUN5              | L   | 0.771      | -            | -                | -                | -         |    -9.66 | Aerial, allu, HENU, juho, xseveN |
|            2 |     2801 | 2024-08-03 | ENCE Academy      | W   | 0.566      | 0.143        | 0.009 (0.001)    | 0.265 (0.021)    | 1 (0.566) |     4.99 | Aerial, allu, HENU, juho, xseveN |
|            1 |     2863 | 2024-08-01 | Heimo             | W   | 0.554      | 0.143        | 0.001 (0.000)    | 0.163 (0.013)    | 1 (0.554) |     2.75 | Aerial, allu, HENU, juho, xseveN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,320.00)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-10-20 |      1.000 | $3,320.00      | $3,320.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
