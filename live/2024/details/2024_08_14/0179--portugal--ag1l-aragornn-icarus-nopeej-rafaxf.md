### Roster Details<br />
Team Name: Portugal<br />
Roster: Ag1l, aragornN, Icarus, NOPEEJ, rafaxF<br />
Global Rank: [179](../../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_14.md)<br />
Regional Rank: [113]( ../../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  640.2<br />
<br />
Final Rank Value (640.2) = Starting Rank Value (656.0) + Head To Head Adjustments (-15.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.023[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 656.0
- 400 + ( ( 0.130 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 656.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1137 | 2024-07-14 | Sampi            | L   | 0.993      | -            | -                | -                | -         |    -6.35 | Ag1l, aragornN, Icarus, NOPEEJ, rafaxF |
|           14 |     1146 | 2024-07-13 | The Suspect      | L   | 0.987      | -            | -                | -                | -         |    -8.86 | Ag1l, aragornN, Icarus, NOPEEJ, rafaxF |
|           13 |     1238 | 2024-07-08 | Norway           | W   | 0.953      | 0.143        | 0.005 (0.001)    | 0.096 (0.013)    | 0 (0.000) |    15.77 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|           12 |     1917 | 2024-06-01 | FLuffy Gangsters | L   | 0.707      | -            | -                | -                | -         |   -13.29 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           11 |     1983 | 2024-05-30 | RUBY             | L   | 0.693      | -            | -                | -                | -         |    -4.02 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           10 |     2018 | 2024-05-29 | TNL              | W   | 0.686      | 0.372        | 0.000 (0.000)    | 0.038 (0.010)    | 0 (0.000) |     6.39 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|            9 |     2555 | 2024-05-11 | AL QATRAO        | L   | 0.566      | -            | -                | -                | -         |    -8.70 | Ag1l, aragornN, fox, pr, rafaxF        |
|            8 |     2999 | 2024-04-20 | 1WIN             | L   | 0.426      | -            | -                | -                | -         |    -2.47 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|            7 |     3033 | 2024-04-19 | Secret           | W   | 0.420      | 0.143        | 0.000 (0.000)    | 0.046 (0.003)    | 0 (0.000) |     4.50 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|            6 |     3076 | 2024-04-18 | Illuminar        | L   | 0.413      | -            | -                | -                | -         |    -9.02 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|            5 |     3133 | 2024-04-17 | 500              | W   | 0.406      | 0.143        | 0.001 (0.000)    | 0.069 (0.004)    | 0 (0.000) |     7.41 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|            4 |     4187 | 2024-03-03 | Rhyno            | W   | 0.106      | 0.314        | 0.066 (0.002)    | 0.407 (0.014)    | 1 (0.106) |     2.76 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            3 |     4221 | 2024-03-02 | OVERFRAG         | W   | 0.098      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.098) |     0.94 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            2 |     4354 | 2024-02-24 | 500              | L   | 0.052      | -            | -                | -                | -         |    -0.77 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            1 |     4492 | 2024-02-18 | Alliance         | L   | 0.012      | -            | -                | -                | -         |    -0.10 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($653.66)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.572 | $539.00        | $308.39         |
| 2024-03-03 |      0.106 | $3,251.00      | $345.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
