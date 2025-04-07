### Roster Details<br />
Team Name: anything else<br />
Roster: cypress, FAME, K4mr0, mcniff, Slash<br />
Global Rank: [122](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [25]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  702.4<br />
<br />
Final Rank Value (702.4) = Starting Rank Value (689.1) + Head To Head Adjustments (13.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.1
- 400 + ( ( 0.157 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 689.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      350 | 2025-03-23 | LOBOARMY         | L   | 1.000      | -            | -                | -                | -         |   -15.22 | cypress, FAME, K4mr0, mcniff, Slash |
|            4 |      387 | 2025-03-21 | Marca Registrada | W   | 1.000      | 0.372        | 0.012 (0.004)    | 0.214 (0.080)    | 0 (0.000) |    13.84 | cypress, FAME, K4mr0, mcniff, Slash |
|            3 |      413 | 2025-03-19 | Tsunami          | W   | 1.000      | 0.372        | 0.007 (0.003)    | 0.161 (0.060)    | 0 (0.000) |    14.10 | cypress, FAME, K4mr0, mcniff, Slash |
|            2 |      427 | 2025-03-17 | Wanted Goons     | W   | 1.000      | 0.372        | 0.007 (0.003)    | 0.200 (0.074)    | 0 (0.000) |    16.34 | cypress, FAME, K4mr0, mcniff, Slash |
|            1 |      539 | 2025-03-10 | Marca Registrada | L   | 1.000      | -            | -                | -                | -         |   -15.76 | cypress, FAME, K4mr0, mcniff, Slash |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,300.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-23 |      1.000 | $4,300.00      | $4,300.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
